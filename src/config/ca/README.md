[TOC]

# TLS certification generation

We will generate **<u>SIMPLE</u>** TLS certification without **ANY PASSWORD** and **ANY SECURITY**. It will use only test application or tamplate.

## Generate CA Certification

### Generate RSA Key pair(public/private key)
```
openssl genrsa -out ca-key.pem 2048
```
And input your password. Don't forget it.

### Modify permission of private key
```
chmod 600 ca.key
```

### Generate CSR
```
openssl req \
    -new \
    -key ca-key.pem \
    -out ca-csr.pem \
    -config ca.conf
```

### Generate Certification (validity for 10 years)
```
openssl x509 -req \
    -days 3650 \
    -extensions v3_ca \
    -set_serial 1 \
    -in ca-csr.pem \
    -signkey ca-key.pem \
    -out ca-crt.pem \
    -extfile ca.conf
```

### Confirm you certification
```
openssl x509 -text -in ca-crt.pem
```

## Generate SSL Certification

### Generate RSA Key pair(public/private key)
```
openssl genrsa -out server-key.pem 2048;
```
And input your password. Don't forget it.

### Remove Permission of private key
```
chmod 600 server-key.pem
```

### Generate CSR 
```
openssl req \
    -new \
    -key server-key.pem \
    -out server-csr.pem \
    -config server.conf
```

### Generate Certification (validity for 10 years)
```
openssl x509 -req \
    -days 3650 \
    -extensions v3_user \
    -in server-csr.pem \
    -CA ca-crt.pem \
    -CAcreateserial \
    -CAkey ca-key.pem \
    -out server-crt.pem \
    -extfile server.conf
```
Signature by ca.key

### Confirm you certification

```
openssl x509 -text -in server-crt.pem
```



Then, you can generate <u>**JUST SIMPLE**</u> TLS Certification. Do not use in real-world.