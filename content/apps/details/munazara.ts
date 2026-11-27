// Munazara: page data for /apps/munazara/, taken from the app's own wording and its explainer video.
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "munazara",
  tagline: {
    en: "A structured debate between friends",
    ar: "مناظرة منظّمة بين الأصدقاء",
  },
  intro: {
    en: "A free site for long debates between friends: every reply is attached to the point it answers, and every open point shows whose reply is awaited. The tool structures the debate and judges no one: no scores, votes or \"winner\".",
    ar: "موقع مجاني لإدارة مناظرة طويلة بين أصدقاء: كل رد مرتبط بالنقطة التي يرد عليها، وكل نقطة مفتوحة تُظهر من ينتظر ردّه. الأداة تنظّم الحوار ولا تحكم لأحد؛ لا نقاط ولا تصويت ولا «فائز».",
  },
  facts: [
    { en: "Free", ar: "مجاني" },
    { en: "Android app and web app", ar: "تطبيق أندرويد وتطبيق ويب" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "No accounts, no sign-in", ar: "لا حسابات، ولا تسجيل دخول" },
    { en: "Works offline after the first visit", ar: "يعمل دون اتصال بعد أول زيارة" },
    { en: "The debate is kept on your device", ar: "المناظرة محفوظة على جهازك" },
  ],
  downloads: [
    {
      label: { en: "Download the app (APK)", ar: "نزّل التطبيق (APK)" },
      href: "munazara.apk",
      release: ".",
      kind: "apk",
      primary: true,
      version: "1.0.0",
      size: "0.9 MB",
      note: { en: "Android 7 or newer, with Chrome", ar: "أندرويد 7 فأحدث، مع متصفح Chrome" },
    },
    {
      label: { en: "Open in the browser", ar: "افتحه في المتصفح" },
      href: "app/",
      kind: "open",
    },
  ],
  video: {
    src: "/apps/munazara/app/media/explainer.mp4",
    poster: "/apps/munazara/app/media/explainer-poster.jpg",
    captions: "/apps/munazara/app/media/explainer.ar.vtt",
    captionsLang: "ar",
    title: {
      en: "What is this app? Watch the explainer",
      ar: "ما هذا التطبيق؟ شاهد الشرح",
    },
  },
  features: [
    {
      title: { en: "As easy as a chat, organised underneath", ar: "سهل كالمحادثة، ومنظّم من الداخل" },
      body: {
        en: "You write as you would on WhatsApp: tap \"Reply\" under a message and type. Every reply is tied to the exact point it answers, so the discussion is also a tree, which you can open from the menu: the claim at the top, under it its proofs and the objections to it, and under each objection the answer to it.",
        ar: "تكتب كما تكتب في واتساب: تضغط «ردّ» تحت الرسالة وتكتب. وكل ردّ يُربط بالنقطة التي يرد عليها بالضبط، فيكون النقاش أيضاً شجرة تفتحها من القائمة: في أعلاها الدعوى، وتحتها أدلتها، والاعتراضات عليها، وتحت كل اعتراض، الجواب عنه.",
      },
    },
    {
      title: { en: "It always knows whose turn it is", ar: "يعرف دائماً على مَن الدور" },
      body: {
        en: "One line at the top says what is waiting for your reply and what is waiting for your friend. Each point waiting on you gets a card that quotes exactly what to answer. When your friend answers your question, you decide with one tap: \"Convinced\", \"Not convinced\" or \"Question\".",
        ar: "سطر واحد في الأعلى يقول: ما الذي بانتظار ردّك، وما الذي بانتظار صاحبك. ولكل نقطة تنتظرك بطاقة تقتبس بالضبط ما تردّ عليه. وإذا أجاب صاحبك عن سؤالك، تختار بضغطة: «اقتنعتُ»، أو «لم أقتنع»، أو «سؤال».",
      },
    },
    {
      title: { en: "No point ends in silence", ar: "لا تنتهي أيُّ نقطة بالسكوت" },
      body: {
        en: "A point that has not been answered stays visible however much time passes, until it is answered, conceded or withdrawn.",
        ar: "النقطة التي لم يُجب عنها تبقى ظاهرة مهما مرّ عليها من وقت. حتى يُجاب عنها، أو يُسلَّم بها، أو تُسحب.",
      },
    },
    {
      title: { en: "Moves taken from the classical art of debate", ar: "أزرار من آداب البحث والمناظرة" },
      body: {
        en: "Choosing a reply type is optional. The types are not arbitrary; they come from a long-established discipline in our heritage, the etiquette of inquiry and debate (adab al-bahth wal-munazara). \"What do you mean?\" asks for the meaning to be clarified. \"What is your proof?\" asks for the proof of a claim. \"I object\" comes with the reason for the objection. \"Refute with a witness\" (naqd) defeats a proof with a case where its conclusion fails. \"Counter-argument\" (mu'arada) sets up an opposing claim with its proof. \"Show the source\" is for when your friend relays someone else's words. Then \"I accept this\" if you are convinced, or \"Propose we agree to disagree here\" if you end up at two different starting principles.",
        ar: "اختيار نوع الردّ اختياري، والأنواع ليست عشوائية، بل مأخوذة من علمٍ عريق في تراثنا، هو: آداب البحث والمناظرة. «ماذا تقصد؟»: لطلب توضيح المعنى. «ما دليلك؟»: لطلب الدليل على الدعوى. «أعترض»: مع ذكر سبب الاعتراض. «نقض بشاهد»: أن تُبطل الدليل بمثالٍ يتخلّف فيه الحكم. «معارضة»: أن تقيم دعوى مقابلة بدليلها. «وثّق النقل»: إذا نقل صاحبك كلاماً عن غيره. ثم «أقبل هذا» إذا اقتنعت، أو «أقترح أن نتفق على الاختلاف هنا» إذا انتهيتما إلى أصلين مختلفين.",
      },
    },
    {
      title: { en: "A list of terms", ar: "قائمة المصطلحات" },
      body: {
        en: "If a word means different things to the two of you, such as the word \"reason\", you add a definition for it. It then appears in the list of terms as agreed or disputed. That way two people never argue while each means something different.",
        ar: "إذا اختلف معنى كلمة بينكما، مثل كلمة «العقل»، تضيفان لها تعريفاً. فيظهر في قائمة المصطلحات: متفقاً عليه، أو محلَّ خلاف. وهكذا لا يتناقش اثنان، وكلٌّ منهما يقصد معنى مختلفاً.",
      },
    },
    {
      title: { en: "Fair: it declares no winner", ar: "عادل: لا يعلن فائزاً" },
      body: {
        en: "The app is fair: it rules for no one, gives no points and declares no winner. It only organises the conversation and shows each side what is waiting on them, to the same degree. The aim, as the people of debate say, is for the truth to appear, even if at your friend's hand.",
        ar: "التطبيق عادل: لا يحكم لأحد، ولا يعطي نقاطاً، ولا يعلن فائزاً. هو ينظّم الحوار فقط، ويُظهر لكل طرف ما ينتظره، بالقدر نفسه. فالغاية، كما يقول أهل المناظرة: أن يظهر الحق، ولو على يد صاحبك.",
      },
    },
    {
      title: { en: "Private", ar: "خاص" },
      body: {
        en: "No accounts and no sign-in. The debate is kept on your device, and everything that leaves it is encrypted. Its key is only in the invite link, so send the link to your friend alone.",
        ar: "لا حسابات، ولا تسجيل دخول. المناظرة محفوظة على جهازك، وكل ما يخرج منه مشفّر. ومفتاحها في رابط الدعوة فقط، فأرسل الرابط لصاحبك وحده.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/munazara-shot.webp",
      shape: "wide",
      caption: {
        en: "Three screens: opening an invite (one field, then reply), the conversation with what is waiting for your reply, and the reply box",
        ar: "ثلاث شاشات: فتح دعوة (خانة واحدة ثم الردّ)، والمحادثة وفيها ما بانتظار ردّك، ونافذة الردّ",
      },
    },
  ],
  sections: [
    {
      title: { en: "Why it was made", ar: "لماذا صُنع" },
      intro: {
        en: "Imagine you have been discussing something with a friend for months over WhatsApp voice notes, and the question is a big one. Every message carries arguments and questions, then disappears up the chat. Over time four problems appear.",
        ar: "تخيّل أنك تتناقش مع صديقك منذ أشهر، عبر رسائل واتساب الصوتية. والسؤال كبير. كل رسالة تحمل حججاً وأسئلة، ثم تختفي في أعلى المحادثة. ومع الوقت تظهر أربع مشكلات.",
      },
      items: [
        {
          title: { en: "First", ar: "الأولى" },
          body: { en: "Arguments get lost among the messages.", ar: "الحجج تضيع بين الرسائل." },
        },
        {
          title: { en: "Second", ar: "الثانية" },
          body: {
            en: "Questions stay unanswered without anyone noticing.",
            ar: "أسئلة تبقى بلا جواب، دون أن ينتبه أحد.",
          },
        },
        {
          title: { en: "Third", ar: "الثالثة" },
          body: {
            en: "Words change their meaning halfway through the discussion.",
            ar: "الكلمات يتغيّر معناها في منتصف النقاش.",
          },
        },
        {
          title: { en: "Fourth", ar: "الرابعة" },
          body: {
            en: "Neither of you knows exactly where the discussion has got to.",
            ar: "لا أحد منكما يعرف أين وصل النقاش بالضبط.",
          },
        },
        {
          title: { en: "Why it matters", ar: "لماذا هو مهم؟" },
          body: {
            en: "Because a long discussion deserves to be kept and built on, not lost in messages. And because it lets you both know where you agree, exactly where you differ, and what is still unanswered. The conversation becomes clearer, fairer and more fruitful.",
            ar: "لأن النقاش الطويل يستحق أن يُحفظ ويُبنى عليه، لا أن يضيع في الرسائل. ولأنه يجعلكما تعرفان أين تتفقان، وأين تختلفان بالضبط، وما الذي بقي بلا جواب. فيصبح الحوار أوضح، وأعدل، وأكثر ثمرة.",
          },
        },
      ],
    },
    {
      title: { en: "Fair-play charter", ar: "ميثاق المناظرة" },
      intro: {
        en: "The app shows these seven lines to anyone who joins a debate. Adapted from the classical ādāb al-munāẓara (e.g. al-Shinqīṭī).",
        ar: "يعرض التطبيق هذه الأسطر السبعة على كل من ينضم إلى مناظرة. مقتبسة بتصرّف من آداب المناظرة عند الشنقيطي وغيره.",
      },
      items: [
        {
          title: { en: "1", ar: "الأول" },
          body: { en: "We aim for the truth to appear, even through the other side.", ar: "قصدنا ظهور الحق ولو على يد صاحبي." },
        },
        {
          title: { en: "2", ar: "الثاني" },
          body: { en: "Don't object before you understand: ask \"what do you mean?\" first.", ar: "لا أعترض على كلامٍ حتى أفهم مراده؛ «ماذا تقصد؟» أولاً." },
        },
        {
          title: { en: "3", ar: "الثالث" },
          body: { en: "Clear words; neither padding nor cryptic brevity.", ar: "ألفاظ واضحة، بلا إطالة مملة ولا اختصار مُخلّ." },
        },
        {
          title: { en: "4", ar: "الرابع" },
          body: { en: "Stay on the point; a new topic becomes a new point.", ar: "نبقى في موضوع النقطة؛ والجديد يُطرح نقطةً مستقلة." },
        },
        {
          title: { en: "5", ar: "الخامس" },
          body: { en: "No mockery or belittling.", ar: "لا سخرية ولا تحقير." },
        },
        {
          title: { en: "6", ar: "السادس" },
          body: { en: "Whoever claims owes a proof; whoever quotes owes the source.", ar: "على من ادّعى الدليل، ومن نقل فعليه صحة النقل." },
        },
        {
          title: { en: "7", ar: "السابع" },
          body: { en: "The tool structures the debate; it judges no one.", ar: "الأداة تنظّم الحوار ولا تحكم لأحد." },
        },
      ],
    },
    {
      title: { en: "Privacy", ar: "الخصوصية" },
      items: [
        {
          title: { en: "Where is the debate stored?", ar: "أين تُحفظ المناظرة؟" },
          body: {
            en: "On your device only (browser storage). There is no server of ours and no accounts.",
            ar: "على جهازك فقط (في تخزين المتصفح). لا يوجد خادم لنا، ولا حسابات.",
          },
        },
        {
          title: { en: "What leaves your device?", ar: "ماذا يخرج من جهازك؟" },
          body: {
            en: "\"Manual\" mode: nothing except what you send yourself (an update link or file). \"Sync via public servers\" (the default): encrypted copies of your points are sent to public Nostr relays run by others. They cannot read the content, but they see timing, size and IP address, and can link one debate's activity together. They do not promise to keep data long; that is why every device keeps the whole debate.",
            ar: "في الوضع «اليدوي»: لا شيء إلا ما ترسله بنفسك (رابط تحديث أو ملف). في وضع «المزامنة عبر خوادم عامة» (وهو الافتراضي): نسخ مشفّرة من نقاطك تُرسَل إلى خوادم «نوستر» عامة يديرها آخرون. لا يستطيعون قراءة المحتوى، لكنهم يرون توقيت الإرسال وحجمه وعنوان IP، ويمكنهم ربط نشاط المناظرة الواحدة ببعضه. ولا تضمن هذه الخوادم الاحتفاظ بالبيانات مدة طويلة؛ لذلك يحتفظ كل جهاز بالمناظرة كاملة.",
          },
        },
        {
          title: { en: "The link is the key", ar: "الرابط هو المفتاح" },
          body: {
            en: "Whoever has the invite link can read and take part. The link stays in the WhatsApp chat and its backups (unencrypted unless you turn on WhatsApp's encrypted backup), and may stay in browser history. A sent link cannot be revoked.",
            ar: "من يملك رابط الدعوة يستطيع قراءة المناظرة والمشاركة فيها. الرابط يبقى في محادثة واتساب وفي نسخها الاحتياطية (غير المشفّرة ما لم تفعّل التشفير في واتساب)، وقد يبقى في سجل المتصفح. لا يمكن سحب الرابط بعد إرساله.",
          },
        },
        {
          title: { en: "Signatures", ar: "التوقيع" },
          body: {
            en: "Every point is signed with its author's key, kept on their device, so a link holder cannot write as an existing participant, but can join under a new name. If you send your \"identity link\", whoever has it can write as you.",
            ar: "كل نقطة موقّعة بمفتاح كاتبها المحفوظ على جهازه، فلا يستطيع حامل الرابط أن يكتب باسم مشارك موجود؛ لكنه يستطيع الانضمام باسم جديد. إن أرسلت «رابط الهوية» فمن يملكه يكتب باسمك.",
          },
        },
        {
          title: { en: "Who sees your visit?", ar: "من يرى زيارتك للموقع؟" },
          body: {
            en: "The site is hosted on GitHub Pages at ahmadnayfeh.com, and GitHub logs visitor IP addresses for security. The part of the link after \"#\" (which holds the key) is never sent to any server.",
            ar: "الموقع مستضاف على GitHub Pages بالعنوان ahmadnayfeh.com، و GitHub يسجّل عناوين IP للزوار لأغراض أمنية. الجزء الذي بعد «#» في الرابط (وفيه المفتاح) لا يُرسل إلى أي خادم.",
          },
        },
        {
          title: { en: "What we never do", ar: "ما لا نفعله أبداً" },
          body: {
            en: "No analytics, trackers, or third-party fonts or scripts, and no search-engine indexing.",
            ar: "لا إحصاءات ولا متتبّعات ولا خطوط أو سكربتات من مواقع أخرى، ولا أرشفة في محركات البحث.",
          },
        },
        {
          title: { en: "Device inspection", ar: "فحص الجهاز" },
          body: {
            en: "The debate is stored unencrypted on your phone; anyone who can open your phone can read it. You can hide titles on the home screen and delete a debate from the device at any time.",
            ar: "المناظرة محفوظة على هاتفك غير مشفّرة؛ من يفتح هاتفك يستطيع قراءتها. يمكنك إخفاء العناوين في الصفحة الرئيسية، وحذف المناظرة من الجهاز في أي وقت.",
          },
        },
      ],
    },
  ],
  install: [
    {
      title: { en: "Start", ar: "ابدأ" },
      body: {
        en: "Write the question in dispute and your claim, then share the invite link with your friend on WhatsApp.",
        ar: "اكتب السؤال محل النزاع ودعواك، ثم شارك رابط الدعوة مع صاحبك على واتساب.",
      },
    },
    {
      title: { en: "The \"Status\" page", ar: "صفحة «الحالة»" },
      body: {
        en: "The first thing you see: \"Waiting on you\", meaning points you owe a reply on, and points where it is \"your move\" after your friend answered. The same is shown for your friend.",
        ar: "أول ما تراه «بانتظارك»: نقاط عليك الرد عليها، ونقاط «دورك» فيها بعد أن أجاب صاحبك. وكذلك ما ينتظر صاحبك، بالطريقة نفسها.",
      },
    },
    {
      title: { en: "Replying", ar: "الرد" },
      body: {
        en: "Open any point and tap \"Reply\". The app suggests a fitting move (e.g. \"I object\" or \"Answer with a reason\"); you can choose another: \"What is your proof?\", \"What do you mean?\", \"I accept this\", and under \"More\": refutation with a witness, counter-argument, ask for the source, define a term, agree to disagree.",
        ar: "افتح أي نقطة واضغط «ردّ». يقترح التطبيق الحركة المناسبة (مثل «أعترض» أو «أجيب بدليل») ويمكنك اختيار غيرها: «ما دليلك؟»، «ماذا تقصد؟»، «أقبل هذا»، وفي «المزيد»: النقض بشاهد، والمعارضة، وطلب توثيق النقل، وتعريف المصطلح، والاتفاق على الاختلاف.",
      },
    },
    {
      title: { en: "Silence closes nothing", ar: "لا شيء يُغلق بالسكوت" },
      body: {
        en: "An open point stays open until it is answered, conceded, withdrawn, or you agree to disagree on it.",
        ar: "النقطة المفتوحة تبقى مفتوحة حتى يُجاب عنها أو يُسلَّم بها أو تُسحب أو تتفقا على الاختلاف فيها.",
      },
    },
    {
      title: { en: "Terms", ar: "المصطلحات" },
      body: {
        en: "If a word means different things to you, add \"Define a term\"; it appears in the Terms tab as agreed or disputed.",
        ar: "إذا اختلف معنى كلمة بينكما فأضف «تعريف مصطلح»؛ ويظهر في تبويب «المصطلحات» متفقاً عليه أو محل خلاف.",
      },
    },
    {
      title: { en: "Dictation", ar: "الإملاء الصوتي" },
      body: {
        en: "To speak instead of typing, use your phone keyboard's microphone. On recent iPhones, dictation supports Arabic on-device. With Gboard, audio may go to Google's servers; try airplane mode to see whether it works offline. You can also copy WhatsApp's own transcript of a voice note and paste it here.",
        ar: "لتتكلم بدل الكتابة استخدم زر الميكروفون في لوحة مفاتيح هاتفك. على آيفون يدعم الإملاء العربية على الجهاز نفسه في الطرز الحديثة. في Gboard قد يُرسل الصوت إلى خوادم Google؛ جرّب وضع الطيران لتعرف هل يعمل دون إنترنت. ويمكنك نسخ نص «التفريغ» الذي يوفّره واتساب لرسالة صوتية ولصقه هنا.",
      },
    },
    {
      title: { en: "Keep your debate safe", ar: "احفظ مناظرتك" },
      body: {
        en: "Install the site to your home screen and save a backup now and then. On iPhone the installed app has storage separate from Safari: paste the invite link inside it after installing.",
        ar: "ثبّت الموقع على الشاشة الرئيسية، واحفظ «نسخة احتياطية» بين حين وآخر. على آيفون: التطبيق المثبّت له تخزين منفصل عن سفاري، فالصق رابط الدعوة داخله بعد التثبيت.",
      },
    },
  ],
  notes: [
    {
      en: "In a private window or inside WhatsApp's browser the debate may be lost when you close it. Open the link in your normal browser.",
      ar: "إن كنت في نافذة خاصة أو داخل متصفح واتساب فقد تضيع المناظرة عند الإغلاق. افتح الرابط في متصفحك المعتاد.",
    },
    {
      en: "The explainer is a video with Arabic narration and captions (about 6 minutes): the problem it solves, the idea, and how to use it.",
      ar: "الشرح فيديو بتعليق صوتي عربي (قرابة 6 دقائق): المشكلة التي يحلّها التطبيق، وفكرته، وكيف تستخدمه.",
    },
    {
      en: "The rules of debate etiquette inside the app are adapted from the debate etiquette of al-Shinqiti and others.",
      ar: "آداب المناظرة داخل التطبيق مقتبسة بتصرّف من آداب المناظرة عند الشنقيطي وغيره.",
    },
  ],
}
