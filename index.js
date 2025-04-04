const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// Crie uma pasta para manter a conexão com o cliente
const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => { // Criando o QR Code
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");

    // Enviar mensagem automática a cada 10 minutos
    const numero = "55123456"; // Coloque o número do contato (inicie com o código do país)
    
    // Enviar uma mensagem apos um intervalo de tempo
    setInterval(async () => {
        try {
            // Mensagem automática
            const chat = await client.getChatById(numero + "@c.us");
            chat.sendMessage("Manda foto de agora linda? 🥰🥰 ");

            console.log("Mensagem enviada automaticamente para " + numero);
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
        }
    }, 60000); 
});

// Evento de Mensagens
// client.on("message_create", async (message) => {
//    if (message.body == "a") {
//        await message.reply("Sabia que você pode morrer hoje? 💀");
//    }
// });

// Inicia a comunicação com o cliente
client.initialize();
// Rodar o comando 'npm start' no terminal do editor de código




