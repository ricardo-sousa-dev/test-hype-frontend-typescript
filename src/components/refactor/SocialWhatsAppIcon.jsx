import React from 'react';

function WhatsAppIcon() {
  return (
    <div id="msgWhats">
      <a
        id="link-whatsapp"
        href="https://api.whatsapp.com/send?phone=5541991097782&text=Ol%C3%A1!%20Acessei%20ao%20site%20da%20Singelee%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20geleias..."
       
      >
        <i
          // style="margin-top:16px"
          className="fa fa-whatsapp" />
      </a>
      <a
        id="textWhats"
        href="https://api.whatsapp.com/send?phone=5541991097782&text=Ol%C3%A1!%20Acessei%20ao%20site%20da%20Singelee%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20as%20geleias..."
      >
        <p>Se tiver alguma dúvida, chame a gente por aqui.: )</p>
      </a>
    </div>
  );
}

export default WhatsAppIcon;
