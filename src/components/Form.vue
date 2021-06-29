<template>
  <div class="columns is-centered my-4">
    <div class="column is-10 py-6" id="container">
      <p class="is-size-2 has-text-weight-bold mt-4 has-text-centered">
        Faites ce voyage avec nous !
      </p>
      <p class="is-size-2 has-text-weight-bold mb-5 has-text-centered">
        Vous ne le regretterez pas !
      </p>
      <div class="columns is-centered">
        <div class="column is-6">
          <p class="is-size-4 has-text-weight-normal has-text-centered">
            Recevez notre newsletter chaque semaine pour suivre l’avancée du
            projet et restez informés !
          </p>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-5">
          <link
    rel="stylesheet"
    href="https://sibforms.com/forms/end-form/build/sib-styles.css"
  />
          <form
            id="sib-form"
            method="POST"
            action="https://027da2e0.sibforms.com/serve/MUIEAM6YfRCUrJ5GT_qo2NyQGQ5mbFUXVhLwq6rr7HIb_n3Pjmvh840RGWLo5HrCkXZCBAj_YC5vPh3fghNHqqgPw7uK9nfI7bYc3QLzONlzI6JcBapx--0ARN1qh6BvH4x5VvKN-LeuyjgL4Fu_DvNvThfjZ07T7u41oF84p9zdO3fdQx2h_FJos514wpCT_TZzPfLEiMhVkx8N"
          >
            <div style="padding: 8px 0">
              <div class="sib-input sib-form-block">
                <div class="form__entry entry_block">
                  <div class="form__label-row">
                    <div class="entry__field">
                      <input
                        class="input Neumorphism"
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autocomplete="off"
                        placeholder="Votre adresse e-mail..."
                        data-required="true"
                        required
                      />
                    </div>
                  </div>

                  <label
                    class="entry__error entry__error--primary"
                    style="
                      font-size: 16px;
                      text-align: left;
                      font-family: 'Helvetica', sans-serif;
                      color: #661d1d;
                      background-color: #ffeded;
                      border-radius: 3px;
                      border-color: #ff4949;
                    "
                  >
                  </label>
                </div>
              </div>
            </div>
            <div class="columns is-centered my-4">
              <div class="sib-optin sib-form-block">
                <div class="form__entry entry_mcq">
                  <div class="form__label-row">
                    <div class="entry__choice">
                      <label>
                        <input
                          type="checkbox"
                          class="input_replaced"
                          value="1"
                          id="OPT_IN"
                          name="OPT_IN"
                        />
                        <span class="checkbox checkbox_tick_positive"></span
                        ><span class="is-size-6 has-text-weight-normal"
                          ><p>
                            J'accepte de recevoir la newsletter de
                            <i>La Halte Mitoyenne</i>
                          </p></span
                        >
                      </label>
                    </div>
                  </div>
                  <label
                    class="entry__error entry__error--primary"
                    style="
                      font-size: 16px;
                      text-align: left;
                      font-family: 'Helvetica', sans-serif;
                      color: #661d1d;
                      background-color: #ffeded;
                      border-radius: 3px;
                      border-color: #ff4949;
                    "
                  >
                  </label>
                </div>
              </div>
            </div>
            <div class="columns is-centered my-4">
              <div class="sib-form-block">
                <button
                  class="
                    sib-form-block__button sib-form-block__button-with-loader
                    Neumorphism
                    button
                  "
                  form="sib-form"
                  type="submit"
                >
                  <svg
                    class="
                      icon
                      clickable__icon
                      progress-indicator__icon
                      sib-hide-loader-icon
                    "
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                    />
                  </svg>
                  S&#039;abonner
                </button>
              </div>
            </div>
            <input
              type="text"
              name="email_address_check"
              value=""
              class="input--hidden"
            />
            <input type="hidden" name="locale" value="fr" />
            <input type="hidden" name="html_type" value="simple" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 41px;
}

.Neumorphism {
  background: #f0f0f3;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  box-shadow: -10px -10px 30px #ffffff, 4px 7px 9px #aeaec0;
  border-radius: 40px;
}

@font-face {
  font-display: block;
  font-family: Roboto;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2)
      format("woff2"),
    url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff)
      format("woff");
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 600;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2)
      format("woff2"),
    url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff)
      format("woff");
}

@font-face {
  font-display: fallback;
  font-family: Roboto;
  font-weight: 700;
  src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2)
      format("woff2"),
    url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff)
      format("woff");
}

#sib-container input:-ms-input-placeholder {
  text-align: left;
  font-family: "Helvetica", sans-serif;
  color: #c0ccda;
}

#sib-container input::placeholder {
  text-align: left;
  font-family: "Helvetica", sans-serif;
  color: #c0ccda;
}
</style>>
