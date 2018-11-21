const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

بنكي الوسيط المعتمد بالشرق الأوسط
نحن نضمن لكم تعاملات مالية آمنه  لكوننا وسيط مالي معتمد، إشتر عبر الإنترنت بكل ثقة ، نقدم خدمة الوساطة المالية بين طرفين و نشتري لك ما تريد بكل أمان مع خدماتنا المعتمدة.
نحن بنك معتمد ونعمل على مسابقات بمبالغ مليون ريال فما فوق بشكل مستمر وكذلك سيارات وايفونات
الدسكورد وُضع فقط للأخبار وسنقوم بحذفه قريباً والتوجه إلى تويتر

https://discord.gg/hAcATdz

حياك الله عزيزي المواطن ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**

بنكي الوسيط المعتمد بالشرق الأوسط
نحن نضمن لكم تعاملات مالية آمنه  لكوننا وسيط مالي معتمد، إشتر عبر الإنترنت بكل ثقة ، نقدم خدمة الوساطة المالية بين طرفين و نشتري لك ما تريد بكل أمان مع خدماتنا المعتمدة.
نحن بنك معتمد ونعمل على مسابقات بمبالغ مليون ريال فما فوق بشكل مستمر وكذلك سيارات وايفونات
الدسكورد وُضع فقط للأخبار وسنقوم بحذفه قريباً والتوجه إلى تويتر

https://discord.gg/hAcATdz

حياك الله عزيزي المواطن ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NDczNDg3MTIyMDAzNjU2NzA1.Dtd4cQ.8aYc8y1b_nlKMRx7slqAuFQ_zdM');