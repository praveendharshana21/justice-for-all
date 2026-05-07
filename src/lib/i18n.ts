export type Lang = "en" | "si" | "ta";

export const LANGS: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "si", label: "Sinhala", native: "සිංහල" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
];

type Dict = {
  nav_sign: string;
  hero_headline: string;
  hero_sub: string;
  cta_sign: string;
  counter_suffix: string;
  petition_title: string;
  petition: string[];
  form_title: string;
  form_subtitle: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  reason: string;
  consent: string;
  submit: string;
  supporters: string;
  supporters_sub: string;
  thank_you: string;
  validation_required: string;
  validation_email: string;
  validation_consent: string;
  loading: string;
  language: string;
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav_sign: "Sign the Petition",
    hero_headline: "Release the 2022 Protesters — Justice and Freedom Now",
    hero_sub: "A respectful call to review and void the legal proceedings against peaceful Aragalaya participants.",
    cta_sign: "Sign the Petition",
    counter_suffix: "People Have Signed This Petition",
    petition_title: "Our Petition",
    petition: [
      "In 2022, Sri Lanka faced an unprecedented economic crisis. Fuel shortages, rising costs of living, and the breakdown of essential services pushed millions of citizens into severe hardship. In response, people from all walks of life came together in a historic and largely peaceful civic movement, demanding accountability, transparency, and meaningful reform.",
      "The “Gota Go Home” movement emerged as one of the largest peaceful public mobilisations in our country’s recent history. Citizens gathered not in violence, but in unity — marching, singing, and standing together with hope for a better future.",
      "Several years later, it is deeply concerning that a number of individuals who participated in these peaceful demonstrations continue to face legal proceedings. While we fully respect and uphold the rule of law, it is essential that such laws are applied fairly, proportionately, and with full recognition of the fundamental right to peaceful expression.",
      "We also note that many of these legal actions stem from the events of 9th May 2022, when peaceful protesters were subjected to violent attacks. These incidents escalated tensions and led to circumstances under which many of the current cases arose.",
      "Furthermore, it is important to acknowledge that the political transition which followed was significantly shaped by the momentum created through the Aragalaya. In that context, we respectfully call for the use of executive powers to review and void all court proceedings related to peaceful Aragalaya participants.",
      "Justice must not only be enforced — it must also be seen to be fair, balanced, and mindful of the people’s democratic voice.",
    ],
    form_title: "Add Your Voice",
    form_subtitle: "Stand with thousands calling for justice and fairness.",
    full_name: "Full Name",
    email: "Email Address",
    phone: "Phone / WhatsApp (optional)",
    country: "Country (optional)",
    reason: "Reason for Signing",
    consent: "I consent to my name being shown publicly on the supporters list.",
    submit: "Add My Signature",
    supporters: "Recent Supporters",
    supporters_sub: "Voices joining the call for justice.",
    thank_you: "Thank you for signing. Your voice matters.",
    validation_required: "This field is required",
    validation_email: "Please enter a valid email",
    validation_consent: "Consent is required to sign",
    loading: "Loading...",
    language: "Language",
  },
  si: {
    nav_sign: "පෙත්සමට අත්සන් කරන්න",
    hero_headline: "2022 විරෝධතාකරුවන් නිදහස් කරන්න — දැන් යුක්තිය සහ නිදහස",
    hero_sub: "සාමකාමී අරගල සහභාගිවන්නන්ට එරෙහි නඩු සමාලෝචනය කර අවලංගු කිරීමට ගෞරවණීය ඉල්ලීමක්.",
    cta_sign: "පෙත්සමට අත්සන් කරන්න",
    counter_suffix: "ජනතාව මෙම පෙත්සමට අත්සන් කර ඇත",
    petition_title: "අපගේ පෙත්සම",
    petition: [
      "2022 වසරේදී ශ්‍රී ලංකාව ඉතිහාසයේ නොපෙනුණු ආර්ථික අර්බුදයකට මුහුණ දුන්නාය. ඉන්ධන හිඟය, ජීවන වියදම් ඉහළ යාම සහ අත්‍යවශ්‍ය සේවා පද්ධති කඩා වැටීම හේතුවෙන් ලක්ෂ ගණනක් ජනතාව දැඩි අපහසුතාවයට පත් විය. මෙම තත්ත්වයට ප්‍රතිචාර වශයෙන්, සමාජයේ සියලු පංතිවල ජනතාව එක්ව ඉතිහාසගත සහ බහුතරයෙන් සාමකාමී මහජන ව්‍යාපාරයක් ලෙස ගැටළුවට පිළිතුරු, වගකීම් සහ සංශෝධන ඉල්ලා සිටියහ.",
      "“ගෝටා ගෝ හෝම්” ව්‍යාපාරය අප රටේ නවතම ඉතිහාසයේ විශාලතම සාමකාමී මහජන එකමුතුවක් ලෙස ඉස්මතු විය. ජනතාව අවිවාදයෙන්, එකමුතුවෙන් — ගායනා කරමින්, පාගමන් කරමින්, යහපත් අනාගතයක් පිළිබඳ බලාපොරොත්තු සහිතව එකට එක්ව සිටියහ.",
      "වසර කිහිපයකට පසු, එම සාමකාමී විරෝධතා සඳහා සහභාගී වූ පුද්ගලයින් කිහිප දෙනෙකුට තවමත් නීතිමය ක්‍රියාමාර්ග ගෙන යාම ගැන ගැඹුරු කනස්සල්ලක් පවතී. අපි නීතියේ පාලනයට සම්පූර්ණයෙන්ම ගරු කරමු. එහෙත්, එම නීතිය සාධාරණව, සමානුපාතිකව සහ සාමකාමී අදහස් ප්‍රකාශ කිරීමේ මූලික අයිතිවාසිකම් සම්පූර්ණයෙන්ම ගරු කරමින් ක්‍රියාත්මක විය යුතුය.",
      "මෙම නඩු වලින් බොහෝමයක් 2022 මැයි 9 වන දින සිදුවූ සිදුවීම් වලට සම්බන්ධ බවද අප සටහන් කරමු. එදින සාමකාමී විරෝධතාකරුවන්ට එල්ල වූ ප්‍රචණ්ඩ ප්‍රහාර හේතුවෙන් තත්ත්වය උග්‍ර වී, වත්මන් නඩු බොහොමයකට පදනමක් ඇතිවිය.",
      "තවද, පසුව ඇති වූ දේශපාලන වෙනස “අරගලය” මඟින් ඇති වූ ජන බලවේගය මත පදනම් වූ බවද සැලකිල්ලට ගත යුතුය. එම පසුබිම තුළ, සාමකාමී අරගලයට සහභාගී වූවන්ට එරෙහි සියලුම නීතිමය නඩු විභාගයන් අවලංගු කිරීම සඳහා විධායක බලතල භාවිතා කරන ලෙස අප ගෞරවයෙන් ඉල්ලා සිටිමු.",
      "යුක්තිය ක්‍රියාත්මක විය යුතුය — එය සාධාරණ, සමතුලිත සහ ජනතා ප්‍රජාතන්ත්‍රවාදී හඬට ගරු කරන ලෙස ද පෙනී යා යුතුය.",
    ],
    form_title: "ඔබේ හඬ එක් කරන්න",
    form_subtitle: "යුක්තිය සහ සාධාරණත්වය ඉල්ලා දහස් ගණනක් සමඟ සිටගන්න.",
    full_name: "සම්පූර්ණ නම",
    email: "ඊමේල් ලිපිනය",
    phone: "දුරකථන / WhatsApp (විකල්ප)",
    country: "රට (විකල්ප)",
    reason: "අත්සන් කිරීමට හේතුව",
    consent: "මගේ නම ප්‍රසිද්ධ සහාය ලැයිස්තුවේ පෙන්වීමට මම එකඟ වෙමි.",
    submit: "මගේ අත්සන එකතු කරන්න",
    supporters: "මෑත සහායකයින්",
    supporters_sub: "යුක්තිය ඉල්ලා එකතු වන හඬවල්.",
    thank_you: "අත්සන් කිරීමට ස්තූතියි. ඔබේ හඬ වැදගත්.",
    validation_required: "මෙම ක්ෂේත්‍රය අවශ්‍යයි",
    validation_email: "වලංගු ඊමේල් ලිපිනයක් ඇතුළත් කරන්න",
    validation_consent: "අත්සන් කිරීමට එකඟතාව අවශ්‍යයි",
    loading: "පූරණය වෙමින්...",
    language: "භාෂාව",
  },
  ta: {
    nav_sign: "மனுவில் கையெழுத்திடுங்கள்",
    hero_headline: "2022 போராட்டக்காரர்களை விடுவிக்கவும் — இப்போதே நீதியும் சுதந்திரமும்",
    hero_sub: "அமைதியான அரகலயா பங்கேற்பாளர்களுக்கு எதிரான நீதிமன்ற நடவடிக்கைகளை மறுபரிசீலனை செய்து ரத்து செய்ய மரியாதையான கோரிக்கை.",
    cta_sign: "மனுவில் கையெழுத்திடுங்கள்",
    counter_suffix: "பேர் இந்த மனுவில் கையெழுத்திட்டுள்ளனர்",
    petition_title: "எங்கள் மனு",
    petition: [
      "2022ஆம் ஆண்டில், இலங்கை இதுவரை காணாத அளவிலான பொருளாதார நெருக்கடியை எதிர்கொண்டது. எரிபொருள் பற்றாக்குறை, வாழ்வு செலவின் உயர்வு மற்றும் அத்தியாவசிய சேவைகளின் முறிவு ஆகியவை மில்லியன் கணக்கான மக்களை கடுமையான சிரமத்திற்கு உட்படுத்தின. இதற்கு பதிலளிக்க, சமூகத்தின் அனைத்து தரப்பினரும் ஒன்றிணைந்து வரலாற்றுச் சிறப்புமிக்க மற்றும் பெரும்பாலும் அமைதியான குடியுரிமை இயக்கமாக பொறுப்புணர்வு, வெளிப்படைத் தன்மை மற்றும் மாற்றங்களை கோரினர்.",
      "“கோட்டா கோ ஹோம்” இயக்கம் நாட்டின் சமீபத்திய வரலாற்றில் மிகப்பெரிய அமைதியான மக்கள் இயக்கங்களில் ஒன்றாக உருவெடுத்தது. மக்கள் வன்முறையின்றி, ஒற்றுமையுடன் — நடைபயணம் செய்து, பாடி, நல்ல மாற்றத்திற்கான நம்பிக்கையுடன் ஒன்றிணைந்தனர்.",
      "பல ஆண்டுகளுக்குப் பின்னரும், இந்த அமைதியான போராட்டங்களில் பங்கேற்ற சிலர் தொடர்ந்து சட்ட நடவடிக்கைகளை எதிர்கொண்டு வருவது கவலைக்கிடமாக உள்ளது. நாங்கள் சட்டத்தின் ஆட்சியை முழுமையாக மதிக்கிறோம். ஆனால், அந்த சட்டம் நியாயமாகவும், அளவான முறையிலும், அமைதியான கருத்துத் தெரிவிக்கும் அடிப்படை உரிமைகளை முழுமையாக மதிக்கும் வகையிலும் அமல்படுத்தப்பட வேண்டும்.",
      "இந்த வழக்குகளில் பல, 2022 மே 9ஆம் தேதி நடைபெற்ற சம்பவங்களுடன் தொடர்புடையவை என்பதை நாம் கவனிக்கிறோம். அந்த நாளில் அமைதியான போராட்டக்காரர்கள் மீது மேற்கொள்ளப்பட்ட வன்முறைத் தாக்குதல்கள் நிலைமையை மோசமாக்கி, தற்போதைய பல வழக்குகளுக்கான சூழ்நிலையை உருவாக்கின.",
      "மேலும், அதன் பின்னர் ஏற்பட்ட அரசியல் மாற்றம் “அரகலயா” உருவாக்கிய மக்கள் சக்தியின் விளைவாக அமைந்தது என்பதும் குறிப்பிடத்தக்கது. அந்த நிலையில், அமைதியான அரகலயா போராட்டங்களில் பங்கேற்றவர்களுக்கு எதிரான அனைத்து நீதிமன்ற நடவடிக்கைகளையும் ரத்து செய்ய நிர்வாக அதிகாரங்களை பயன்படுத்துமாறு நாம் மரியாதையுடன் கோருகிறோம்.",
      "நீதியானது நடைமுறைப்படுத்தப்படுவதோடு மட்டுமல்லாது — அது நியாயமானது, சமநிலையானது மற்றும் மக்களின் ஜனநாயக குரலை மதிப்பதையும் பிரதிபலிக்க வேண்டும்.",
    ],
    form_title: "உங்கள் குரலை சேர்க்கவும்",
    form_subtitle: "நீதிக்கும் நியாயத்திற்கும் குரல் கொடுக்கும் ஆயிரக்கணக்கானவர்களுடன் இணையுங்கள்.",
    full_name: "முழு பெயர்",
    email: "மின்னஞ்சல் முகவரி",
    phone: "தொலைபேசி / WhatsApp (விருப்பம்)",
    country: "நாடு (விருப்பம்)",
    reason: "கையெழுத்திடுவதற்கான காரணம்",
    consent: "எனது பெயரை பொது ஆதரவாளர் பட்டியலில் காட்ட நான் ஒப்புக்கொள்கிறேன்.",
    submit: "எனது கையொப்பத்தை சேர்",
    supporters: "சமீபத்திய ஆதரவாளர்கள்",
    supporters_sub: "நீதிக்கான அழைப்பில் இணையும் குரல்கள்.",
    thank_you: "கையெழுத்திட்டதற்கு நன்றி. உங்கள் குரல் முக்கியம்.",
    validation_required: "இந்த புலம் தேவை",
    validation_email: "சரியான மின்னஞ்சலை உள்ளிடவும்",
    validation_consent: "கையெழுத்திட சம்மதம் தேவை",
    loading: "ஏற்றுகிறது...",
    language: "மொழி",
  },
};
