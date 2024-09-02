Um socket e um terminal de comunicacao e um socket de rede e um terminal de comunicacao entre dois computadores diferentes ligados em rede

Os dados fluem entre sockets no que ja conhecemos pelo nome de stream, os dados num fluxo podem ser transmitidos em formato binario ou em um buffer, ou em formato unicode em uma string, todos os tipos de dados sao transimitidos em pacotes

Os dados sao divididos em pedacinhos pequenos e de igual tamanho, ha um tipo especial de pacote chamado pacote de termino FIN, que e enviado ao socket para sinalizar o encerramento da transmissao

O TCP precisa de uma conexão dedicada entre os dois terminais de comunicação. Já o UDP é um protocolo não orientado a conexão, o que significa que não há garantias de que os dois terminais realmente conversarão entre si.

Por essa razão, o UDP é menos confiável e robusto que o TCP. Por outro lado, o UDP é geralmente mais rápido que o TCP, o que o torna muito popular para serviços que precisem de respostas rápidas ou em tempo real, como a telefonia IP (mais conhecida como Voice over Internet Protocol, ou VoIP), em que os requisitos de confiabilidade de uma conexão TCP degradariam a qualidade do áudio.

