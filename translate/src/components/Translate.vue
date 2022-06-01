<template>
        <div class="bv-example-row container">
            <div>
                <div v-if="translationError" class="alert alert-danger">
                  error<span >{{translationError}}</span>
                </div>
                <div class="switcher">
                    <h1 class="switcher__title">Select Language Pair To Translate</h1>
                </div>
                <div data-v-2ea71bb5="" class="language">
                    <div data-v-2ea71bb5="" class="row justify-content-center">
                        <span data-v-2ea71bb5="" class="mr-2 my-4">
                            <strong data-v-2ea71bb5="" style="color:white;">From:</strong>
                        </span>
                        <div data-v-2ea71bb5="" class="p-0 my-3 col-sm-10 col-md-3 col-lg-3 col col-9">
                            <select v-model="firstLanguage" data-v-2ea71bb5="" class="language__selectors custom-select" aria-label="Language to translate" id="__BVID__9">
                                <option data-v-2ea71bb5="" data-code="Afrikaans" value="af">Afrikaans</option>
                                <option data-v-2ea71bb5="" data-code="Albanian" value="sq">Albanian</option>
                                <option data-v-2ea71bb5="" data-code="Arabic" value="ar">Arabic</option>
                                <option data-v-2ea71bb5="" data-code="Armenian" value="hy">Armenian</option>
                                <option data-v-2ea71bb5="" data-code="Basque" value="eu">Basque</option>
                                <option data-v-2ea71bb5="" data-code="Bengali" value="bn">Bengali</option>
                                <option data-v-2ea71bb5="" data-code="Bulgarian" value="bg">Bulgarian</option>
                                <option data-v-2ea71bb5="" data-code="Catalan" value="ca">Catalan</option>
                                <option data-v-2ea71bb5="" data-code="Cambodian" value="km">Cambodian</option>
                                <option data-v-2ea71bb5="" data-code="Chinese (Mandarin)" value="zh">Chinese (Mandarin)</option>
                                <option data-v-2ea71bb5="" data-code="Croatian" value="hr">Croatian</option>
                                <option data-v-2ea71bb5="" data-code="Czech" value="cs">Czech</option>
                                <option data-v-2ea71bb5="" data-code="Danish" value="da">Danish</option>
                                <option data-v-2ea71bb5="" data-code="Dutch" value="nl">Dutch</option>
                                <option data-v-2ea71bb5="" data-code="English" value="en">English</option>
                                <option data-v-2ea71bb5="" data-code="Estonian" value="et">Estonian</option>
                                <option data-v-2ea71bb5="" data-code="Fiji" value="fj">Fiji</option>
                                <option data-v-2ea71bb5="" data-code="Finnish" value="fi">Finnish</option>
                                <option data-v-2ea71bb5="" data-code="French" value="fr">French</option>
                                <option data-v-2ea71bb5="" data-code="Georgian" value="ka">Georgian</option>
                                <option data-v-2ea71bb5="" data-code="German" value="de">German</option>
                                <option data-v-2ea71bb5="" data-code="Greek" value="el">Greek</option>
                                <option data-v-2ea71bb5="" data-code="Gujarati" value="gu">Gujarati</option>
                                <option data-v-2ea71bb5="" data-code="Hebrew" value="he">Hebrew</option>
                                <option data-v-2ea71bb5="" data-code="Hindi" value="hi">Hindi</option>
                                <option data-v-2ea71bb5="" data-code="Hungarian" value="hu">Hungarian</option>
                                <option data-v-2ea71bb5="" data-code="Icelandic" value="is">Icelandic</option>
                                <option data-v-2ea71bb5="" data-code="Indonesian" value="id">Indonesian</option>
                                <option data-v-2ea71bb5="" data-code="Irish" value="ga">Irish</option>
                                <option data-v-2ea71bb5="" data-code="Italian" value="it">Italian</option>
                                <option data-v-2ea71bb5="" data-code="Japanese" value="ja">Japanese</option>
                                <option data-v-2ea71bb5="" data-code="Javanese" value="jw">Javanese</option>
                                <option data-v-2ea71bb5="" data-code="Korean" value="ko">Korean</option>
                                <option data-v-2ea71bb5="" data-code="Latin" value="la">Latin</option>
                                <option data-v-2ea71bb5="" data-code="Latvian" value="lv">Latvian</option>
                                <option data-v-2ea71bb5="" data-code="Lithuanian" value="lt">Lithuanian</option>
                                <option data-v-2ea71bb5="" data-code="Macedonian" value="mk">Macedonian</option>
                                <option data-v-2ea71bb5="" data-code="Malay" value="ms">Malay</option>
                                <option data-v-2ea71bb5="" data-code="Malayalam" value="ml">Malayalam</option>
                                <option data-v-2ea71bb5="" data-code="Maltese" value="mt">Maltese</option>
                                <option data-v-2ea71bb5="" data-code="Maori" value="mi">Maori</option>
                                <option data-v-2ea71bb5="" data-code="Marathi" value="mr">Marathi</option>
                                <option data-v-2ea71bb5="" data-code="Mongolian" value="mn">Mongolian</option>
                                <option data-v-2ea71bb5="" data-code="Nepali" value="ne">Nepali</option>
                                <option data-v-2ea71bb5="" data-code="Norwegian" value="no">Norwegian</option>
                                <option data-v-2ea71bb5="" data-code="Persian" value="fa">Persian</option>
                                <option data-v-2ea71bb5="" data-code="Polish" value="pl">Polish</option>
                                <option data-v-2ea71bb5="" data-code="Portuguese" value="pt">Portuguese</option>
                                <option data-v-2ea71bb5="" data-code="Punjabi" value="pa">Punjabi</option>
                                <option data-v-2ea71bb5="" data-code="Quechua" value="qu">Quechua</option>
                                <option data-v-2ea71bb5="" data-code="Romanian" value="ro">Romanian</option>
                                <option data-v-2ea71bb5="" data-code="Russian" value="ru">Russian</option>
                                <option data-v-2ea71bb5="" data-code="Samoan" value="sm">Samoan</option>
                                <option data-v-2ea71bb5="" data-code="Serbian" value="sr">Serbian</option>
                                <option data-v-2ea71bb5="" data-code="Slovak" value="sk">Slovak</option>
                                <option data-v-2ea71bb5="" data-code="Slovenian" value="sl">Slovenian</option>
                                <option data-v-2ea71bb5="" data-code="Spanish" value="es">Spanish</option>
                                <option data-v-2ea71bb5="" data-code="Swahili" value="sw">Swahili</option>
                                <option data-v-2ea71bb5="" data-code="Swedish " value="sv">Swedish </option>
                                <option data-v-2ea71bb5="" data-code="Tamil" value="ta">Tamil</option>
                                <option data-v-2ea71bb5="" data-code="Tatar" value="tt">Tatar</option>
                                <option data-v-2ea71bb5="" data-code="Telugu" value="te">Telugu</option>
                                <option data-v-2ea71bb5="" data-code="Thai" value="th">Thai</option>
                                <option data-v-2ea71bb5="" data-code="Tibetan" value="bo">Tibetan</option>
                                <option data-v-2ea71bb5="" data-code="Tonga" value="to">Tonga</option>
                                <option data-v-2ea71bb5="" data-code="Turkish" value="tr">Turkish</option>
                                <option data-v-2ea71bb5="" data-code="Ukrainian" value="uk">Ukrainian</option>
                                <option data-v-2ea71bb5="" data-code="Urdu" value="ur">Urdu</option>
                                <option data-v-2ea71bb5="" data-code="Uzbek" value="uz">Uzbek</option>
                                <option data-v-2ea71bb5="" data-code="Vietnamese" value="vi">Vietnamese</option>
                                <option data-v-2ea71bb5="" data-code="Welsh" value="cy">Welsh</option>
                                <option data-v-2ea71bb5="" data-code="Xhosa" value="xh">Xhosa</option>
                            </select>                            
                        </div>
                        <div data-v-2ea71bb5="" class="p-0 col-sm-12 col-md-2 col-lg-1 col col-12">
                            <button data-v-2ea71bb5="" @click="btnChange" class="language__interchange btn btn-secondary ml-4">change</button>
                            <!--<button data-v-2ea71bb5="" disabled="disabled" aria-hidden="true" class="language__interchange btn disable-btn fa fa-exchange ml-4">change</button>-->
                        </div>
                        <span data-v-2ea71bb5="" class="mr-2 ml-4 my-4">
                            <strong data-v-2ea71bb5="" style="color:white;">To:</strong>
                        </span>
                        <div data-v-2ea71bb5="" class="p-0 my-3 col-sm-10 col-md-3 col-lg-3 col col-9">
                            <select v-model="secondLanguage" data-v-2ea71bb5="" class="language__selectors custom-select" aria-label="Output text translated" id="__BVID__10">
                              <option data-v-2ea71bb5="" data-code="Afrikaans" value="af">Afrikaans</option>
                              <option data-v-2ea71bb5="" data-code="Albanian" value="sq">Albanian</option>
                              <option data-v-2ea71bb5="" data-code="Arabic" value="ar">Arabic</option>
                              <option data-v-2ea71bb5="" data-code="Armenian" value="hy">Armenian</option>
                              <option data-v-2ea71bb5="" data-code="Basque" value="eu">Basque</option>
                              <option data-v-2ea71bb5="" data-code="Bengali" value="bn">Bengali</option>
                              <option data-v-2ea71bb5="" data-code="Bulgarian" value="bg">Bulgarian</option>
                              <option data-v-2ea71bb5="" data-code="Catalan" value="ca">Catalan</option>
                              <option data-v-2ea71bb5="" data-code="Cambodian" value="km">Cambodian</option>
                              <option data-v-2ea71bb5="" data-code="Chinese (Mandarin)" value="zh">Chinese (Mandarin)</option>
                              <option data-v-2ea71bb5="" data-code="Croatian" value="hr">Croatian</option>
                              <option data-v-2ea71bb5="" data-code="Czech" value="cs">Czech</option>
                              <option data-v-2ea71bb5="" data-code="Danish" value="da">Danish</option>
                              <option data-v-2ea71bb5="" data-code="Dutch" value="nl">Dutch</option>
                              <option data-v-2ea71bb5="" data-code="English" value="en">English</option>
                              <option data-v-2ea71bb5="" data-code="Estonian" value="et">Estonian</option>
                              <option data-v-2ea71bb5="" data-code="Fiji" value="fj">Fiji</option>
                              <option data-v-2ea71bb5="" data-code="Finnish" value="fi">Finnish</option>
                              <option data-v-2ea71bb5="" data-code="French" value="fr">French</option>
                              <option data-v-2ea71bb5="" data-code="Georgian" value="ka">Georgian</option>
                              <option data-v-2ea71bb5="" data-code="German" value="de">German</option>
                              <option data-v-2ea71bb5="" data-code="Greek" value="el">Greek</option>
                              <option data-v-2ea71bb5="" data-code="Gujarati" value="gu">Gujarati</option>
                              <option data-v-2ea71bb5="" data-code="Hebrew" value="he">Hebrew</option>
                              <option data-v-2ea71bb5="" data-code="Hindi" value="hi">Hindi</option>
                              <option data-v-2ea71bb5="" data-code="Hungarian" value="hu">Hungarian</option>
                              <option data-v-2ea71bb5="" data-code="Icelandic" value="is">Icelandic</option>
                              <option data-v-2ea71bb5="" data-code="Indonesian" value="id">Indonesian</option>
                              <option data-v-2ea71bb5="" data-code="Irish" value="ga">Irish</option>
                              <option data-v-2ea71bb5="" data-code="Italian" value="it">Italian</option>
                              <option data-v-2ea71bb5="" data-code="Japanese" value="ja">Japanese</option>
                              <option data-v-2ea71bb5="" data-code="Javanese" value="jw">Javanese</option>
                              <option data-v-2ea71bb5="" data-code="Korean" value="ko">Korean</option>
                              <option data-v-2ea71bb5="" data-code="Latin" value="la">Latin</option>
                              <option data-v-2ea71bb5="" data-code="Latvian" value="lv">Latvian</option>
                              <option data-v-2ea71bb5="" data-code="Lithuanian" value="lt">Lithuanian</option>
                              <option data-v-2ea71bb5="" data-code="Macedonian" value="mk">Macedonian</option>
                              <option data-v-2ea71bb5="" data-code="Malay" value="ms">Malay</option>
                              <option data-v-2ea71bb5="" data-code="Malayalam" value="ml">Malayalam</option>
                              <option data-v-2ea71bb5="" data-code="Maltese" value="mt">Maltese</option>
                              <option data-v-2ea71bb5="" data-code="Maori" value="mi">Maori</option>
                              <option data-v-2ea71bb5="" data-code="Marathi" value="mr">Marathi</option>
                              <option data-v-2ea71bb5="" data-code="Mongolian" value="mn">Mongolian</option>
                              <option data-v-2ea71bb5="" data-code="Nepali" value="ne">Nepali</option>
                              <option data-v-2ea71bb5="" data-code="Norwegian" value="no">Norwegian</option>
                              <option data-v-2ea71bb5="" data-code="Persian" value="fa">Persian</option>
                              <option data-v-2ea71bb5="" data-code="Polish" value="pl">Polish</option>
                              <option data-v-2ea71bb5="" data-code="Portuguese" value="pt">Portuguese</option>
                              <option data-v-2ea71bb5="" data-code="Punjabi" value="pa">Punjabi</option>
                              <option data-v-2ea71bb5="" data-code="Quechua" value="qu">Quechua</option>
                              <option data-v-2ea71bb5="" data-code="Romanian" value="ro">Romanian</option>
                              <option data-v-2ea71bb5="" data-code="Russian" value="ru">Russian</option>
                              <option data-v-2ea71bb5="" data-code="Samoan" value="sm">Samoan</option>
                              <option data-v-2ea71bb5="" data-code="Serbian" value="sr">Serbian</option>
                              <option data-v-2ea71bb5="" data-code="Slovak" value="sk">Slovak</option>
                              <option data-v-2ea71bb5="" data-code="Slovenian" value="sl">Slovenian</option>
                              <option data-v-2ea71bb5="" data-code="Spanish" value="es">Spanish</option>
                              <option data-v-2ea71bb5="" data-code="Swahili" value="sw">Swahili</option>
                              <option data-v-2ea71bb5="" data-code="Swedish " value="sv">Swedish </option>
                              <option data-v-2ea71bb5="" data-code="Tamil" value="ta">Tamil</option>
                              <option data-v-2ea71bb5="" data-code="Tatar" value="tt">Tatar</option>
                              <option data-v-2ea71bb5="" data-code="Telugu" value="te">Telugu</option>
                              <option data-v-2ea71bb5="" data-code="Thai" value="th">Thai</option>
                              <option data-v-2ea71bb5="" data-code="Tibetan" value="bo">Tibetan</option>
                              <option data-v-2ea71bb5="" data-code="Tonga" value="to">Tonga</option>
                              <option data-v-2ea71bb5="" data-code="Turkish" value="tr">Turkish</option>
                              <option data-v-2ea71bb5="" data-code="Ukrainian" value="uk">Ukrainian</option>
                              <option data-v-2ea71bb5="" data-code="Urdu" value="ur">Urdu</option>
                              <option data-v-2ea71bb5="" data-code="Uzbek" value="uz">Uzbek</option>
                              <option data-v-2ea71bb5="" data-code="Vietnamese" value="vi">Vietnamese</option>
                              <option data-v-2ea71bb5="" data-code="Welsh" value="cy">Welsh</option>
                              <option data-v-2ea71bb5="" data-code="Xhosa" value="xh">Xhosa</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="mb-3 col-sm-12 col-md-6 col-lg-6">
                        <textarea @keypress="getTranslation" v-model="firstWord" placeholder="Type something ..." rows="9" wrap="soft" class="textarea w-100 form-control" type="text" aria-label="Original text to be translated" id="__BVID__12"></textarea>
                        <div style="display: none;">
                            <div data-v-23b93764="" class="button">
                                <button data-v-23b93764="" class="button__clear"></button>
                            </div>
                        </div>
                        <button id="copyBtn" data-clipboard-text="" type="button" disabled="disabled" class="btn textarea__buttons textarea__buttons__disabled source-text-btn bg-white p-2 btn-secondary disabled" data-original-title="" title="">
                        <i class="fas fa-copy" aria-hidden="true"></i></button>
                        <div aria-hidden="true" class="d-none" style="display: none;">
                            <div>
                                <strong>Text Copied</strong>
                            </div>
                        </div>
                    </div>
                    <div class="translated-container mb-3 col-sm-12 col-md-6 col-lg-6">
                        <textarea v-model="secondWord" placeholder="The translation results will show here!" rows="9" wrap="soft" class="w-100 form-control" aria-label="Text already translated" id="__BVID__15"></textarea>
                        <button id="copyBtn2" data-clipboard-text="" type="button" disabled="disabled" class="btn textarea__buttons textarea__buttons__disabled p-2 bg-white btn-secondary disabled" data-original-title="" title="">
                            <i class="fas fa-copy" aria-hidden="true"></i>
                        </button>
                        <div aria-hidden="true" class="d-none" style="display: none;">
                            <div>
                                <strong>Text Copied</strong>
                            </div>
                        </div>
                        <button type="button" disabled="disabled" class="btn textarea__buttons textarea__buttons__disabled border-0 p-2 btn-secondary disabled">
                            <i class="fas fa-microphone" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

</template>

<!--<script src="https://kit.fontawesome.com/40e4907d1e.js" defer=""></script>-->

<script>
/* eslint-disable */
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: "Translate",
  setup(){
    const store = useStore()
    return{
      secondWord: computed(() => store.getters.getSecondWord),
      translationError: computed(() => store.getters.getTranslationError),
      isTranslationLoading: computed(() => store.getters.getIsTranslationLoading),
      firstWord: computed({
        get () {
          return store.getters.getFirstWord
        },
        set (data) {
          store.commit('setFirstWord', data)
        }
      }),
      firstLanguage: computed({
        get () {
          return store.getters.getFirstLanguage
        },
        set (data) {
          store.commit('setFirstLanguage', data)
        }
      }),
      secondLanguage: computed({
        get () {
          return store.getters.getSecondLanguage
        },
        set (data) {
          store.commit('setSecondLanguage', data)
        }
      }),
      getTranslation: () => {store.dispatch('apiGetTranslation')},
      btnChange: () => {
        let select1 = document.getElementById("__BVID__9")
        let select2 = document.getElementById("__BVID__10")
        let txtArea1 = document.getElementById("__BVID__12")
        let txtArea2 = document.getElementById("__BVID__15")
        let selectTmpValue = select1.value
        let selectTmpCode = select1.dataset.code
        let txtAreaTmp = txtArea1.value
        txtArea1.value = txtArea2.value
        txtArea2.value = txtAreaTmp
        select1.value = select2.value
        select1.dataset.code = select2.dataset.code
        select2.value = selectTmpValue
        select2.dataset.code = selectTmpCode
        store.dispatch('apiGetTranslation')
      }
    }
  }
}
/*let select1 = document.getElementById("__BVID__9")
let select2 = document.getElementById("__BVID__10")
select1.addEventListener('selectionchange', function (){

})
select2.addEventListener('selectionchange', function (){

})*/
</script>

<!--<script src="https://code.responsivevoice.org/responsivevoice.js" defer=""></script>
<script src="/translator-vuejs/js/chunk-vendors.4899be59.js"></script>
<script src="/translator-vuejs/js/app.725d0d1e.js"></script>-->

<style scoped>
    @import '../css/chunk-vendors.3a837761.css';
    @import '../css/app.c17feffc.css';
    .switcher__title{
        color: white;
    }
</style>