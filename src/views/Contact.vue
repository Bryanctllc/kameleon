<template>
<div class="columns is-centered my-4">
    <div class="column is-10">
        <p class="is-size-2 has-text-weight-bold mb-5 has-text-centered">
        Contactez-nous
      </p>
      <div class="columns is-centered">
        <div class="column is-5">
        <form class="contact-form" @submit.prevent="sendEmail">
            <div>
                <div>
                    <label>Nom</label>
                </div>
                <input type="text" required name="user_name" class="champs">
            </div>
            <div>
                <div>
                    <label>Email</label>
                </div>
                <input type="email" required class="champs" name="user_email" style="width: 100%;">
            </div>
            <div>
            <select class="champs">
                <option>Je suis une Mairie</option>
                <option>Je suis un consommateur</option>
                <option>Je suis un producteur</option>
            </select>
            </div>
            <div>
                <div>
                    <label>Message</label>
                </div>
                <textarea name="message" required class="champsarea"  rows="8" cols="60" style="width: 100%;"></textarea>
            </div>
            <label class="checkbox mb-5">
            <input type="checkbox">
            J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre <router-link to="confidentialite#anchor" class="linkfooter is-size-6 has-text-weight-bold">Politique de confidentialité</router-link> et <router-link to="legal#anchor" class="linkfooter is-size-6 has-text-weight-bold">Mentions Légales</router-link>.
            </label>
            <div>
            <input type="submit" class="champsPtit" value="Envoyer">
            </div>            
        </form>
        </div>
        <div class="column is-4">
        <figure class="image">
        <img id="roundedimg" src="@/assets/img/contact-img.png" alt="légumes au marché" />
      </figure>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_g0uoual', 'template_1rc17uk', e.target, 'user_CvfHhYCyPXUXsTwTZi7wQ')
        .then((result) => {
            alert('Votre message a été envoyé avec succès!', result.status, result.text);
        }, (error) => {
            alert('Une erreur s\'est produite essayez de nouveau.', error);
        });
    }
  }
}
</script>

<style scoped>

.champs {
  background: #F0F0F3;
border: 2px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -10px -10px 30px #FFFFFF, 4px 7px 9px #AEAEC0;
border-radius: 20px;
width: 100%;
margin: 3% 6% 6% 0%;
padding-left: 10px;
height: 2.5em
}

.champsarea{
    background: #F0F0F3;
border: 2px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -10px -10px 30px #FFFFFF, 4px 7px 9px #AEAEC0;
border-radius: 20px;
width: 100%;
margin: 3% 6% 6% 0%;
padding-left: 10px;
}

.champsPtit{
  background: #F0F0F3;
border: 1px solid rgba(255, 255, 255, 0.3);
box-sizing: border-box;
box-shadow: -10px -10px 30px #FFFFFF, 4px 7px 9px #AEAEC0;
border-radius: 40px;
    cursor: pointer;
    padding: 8px 18px;
}

.champs:focus, .champsarea:focus{
  outline: none;
  background-color: #e6e6eb;
}

.linkfooter{
  color: black;
}

</style>