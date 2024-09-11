Esses comandos funcionam no osx e no unix e nao no windows, as que funcionam terao um comentario indicando

Por que no geral eles chamam comandos do sistema operacional

Além de iniciar um processo-filho, você pode usar child_process.exec() e child_process.execFile() para executar um comando.

A função child_process.exec(), como child_process.execFile(), guarda o resultado num buffer. Entretanto, exec() cria um shell para processar a aplicação, diferente de child_process.execFile(), que roda o processo diretamente. Isso faz com que child_process.execFile() seja mais eficiente do que child_process.spawn() com a opção shell ou child_process.exec().
