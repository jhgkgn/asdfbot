import Discord from "discord.js"

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds] })


client.on("ready",()=>{

    client.user.setActivity(" ", {
        type: 1,
        url: "https://www.twitch.tv/kyreiaa"
      });
})

client.login("MTA3ODg3NTA0Njg3MDc4NjA0OA.GV5t8k.qwxGKkNHdIrTZOCW151EOTKQYVA3lS5w_uRkDA")




