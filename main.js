var whatsApp = document.querySelectorAll("a[href='https://wa.me/message/3OYOWPONNNHAK1']");

for (var i = 0; i < whatsApp.length; i++) {
    whatsApp[i].addEventListener("click", function () {
        dataLayer.push({event: "gtm.click", whatsapp:true});
    }
    );
}