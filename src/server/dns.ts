import dns from 'dns'

dns.lookup('oreilly.com', (err, address, family) => {
    if (err) console.error(err);

    console.log('address: ', address);
    console.log('family: ', family)
})

dns.lookup('vercel.com', { all: true }, (err, family) => {
    if (err) console.error(err);

    console.log('family: ', family)
})

dns.resolve('vercel.com', 'NS', (err, addr) => {
    if (err) return err;

    console.log(addr)
})

// family, um numero 4 ou 6 represetabdi a versao de enderecameto IP, IPv4 ou IPv6
// se a flag options tiver com all true ele me retorna todos os enderecos possiveis dentro de family