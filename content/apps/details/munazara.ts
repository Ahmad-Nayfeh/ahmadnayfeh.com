// Munazara: page data for /apps/munazara/ (v3: premises → conclusion, closed replies, decisive endings).
import type { AppDetail } from "../types"

export const detail: AppDetail = {
  slug: "munazara",
  theme: "app-theme-munazara",
  tagline: {
    en: "Arguments that get decided, not lost",
    ar: "حجةٌ تُحسم، لا جدالٌ يضيع",
  },
  intro: {
    en: "A debate between two people in which every argument is numbered premises and a conclusion. The other side can only reply with the classical moves of debate, and every argument ends in a decision: ilzam (your opponent granted everything) or ifham (you could not prove what was denied).",
    ar: "مناظرة بين اثنين، كل حجة فيها مقدماتٌ مرقّمة ونتيجة. لا يردّ الطرف الآخر إلا بالردود المعروفة في آداب المناظرة، وكل حجة تنتهي بحكم: إلزام (سلّم خصمك بكل شيء) أو إفحام (عجزت عن إثبات ما مُنع).",
  },
  facts: [
    { en: "Free", ar: "مجاني" },
    { en: "Arabic and English", ar: "عربي وإنجليزي" },
    { en: "Sign in with Google or email", ar: "دخول بحساب Google أو بالبريد" },
    { en: "An assistant arranges your argument", ar: "مساعدٌ يرتّب حجتك" },
    { en: "Public or private debates", ar: "مناظرات عامة أو خاصة" },
  ],
  downloads: [
    {
      label: { en: "Download the app (APK)", ar: "نزّل التطبيق (APK)" },
      href: "munazara.apk",
      release: ".",
      kind: "apk",
      primary: true,
      version: "1.0.1",
      size: "0.9 MB",
      note: { en: "Android 7 or newer, with Chrome", ar: "أندرويد 7 فأحدث، مع متصفح Chrome" },
    },
    {
      label: { en: "Try it in the browser (no account)", ar: "جرّبه في المتصفح دون حساب" },
      href: "preview/",
      kind: "open",
    },
  ],
  features: [
    {
      title: { en: "Write freely; it becomes an argument", ar: "اكتب بحرية، فتصير حجة" },
      body: {
        en: "Write your reasoning as you would to a friend. The assistant proposes numbered premises in your own words; you edit them and send. The conclusion is never typed: it is exactly what you set out to prove, so nobody can quietly prove something weaker.",
        ar: "اكتب حجتك كما تكتبها لصاحبك، فيقترح المساعد مقدماتٍ مرقّمة بكلماتك أنت، وتعدّلها ثم ترسل. والنتيجة لا تُكتب: هي بالضبط ما تريد إثباته، فلا يستطيع أحد أن يثبت شيئاً أضعف ويوهم أنه أثبت دعواه.",
      },
    },
    {
      title: { en: "Only the known replies", ar: "لا ردّ إلا بالردود المعروفة" },
      body: {
        en: "On each premise: I grant it · What is your proof? · What do you mean? · I grant it with a restriction. On the step to the conclusion: it follows, or a counterexample. On the whole claim: a counter-argument. A grant is final.",
        ar: "على كل مقدمة: أسلّم · ما دليلك؟ · ما المقصود؟ · أسلّمها بقيد. وعلى لزوم النتيجة: تلزم، أو نقضٌ بمثال. وعلى الدعوى كلها: معارضة بحجة على نقيضها. والتسليم نهائي لا يُرجع عنه.",
      },
    },
    {
      title: { en: "Every argument is decided", ar: "كل حجة تُحسم" },
      body: {
        en: "Ilzam: your opponent granted every premise and that the conclusion follows. Ifham: a premise was denied and you did not prove it in time. Or it stops at a principle one side finds self-evident and the other rejects, and the real disagreement becomes clear.",
        ar: "إلزام: سلّم خصمك بكل المقدمات وبلزوم النتيجة. إفحام: مُنعت مقدمة فلم تُثبتها في المهلة. أو تتوقف عند أصلٍ يراه أحدكما بديهياً ويرفضه الآخر، فيتضح موضع الخلاف الحقيقي.",
      },
    },
    {
      title: { en: "No escaping by silence", ar: "لا هروب بالسكوت" },
      body: {
        en: "Each reply has a deadline (1, 3 or 7 days). What waits on your opponent and gets no reply stands; what waits on you and you don't do falls, and the result says it was decided by silence. You can also charge your opponent with a contradiction between two of their statements.",
        ar: "لكل ردّ مهلة (يوم أو ثلاثة أو سبعة). ما ينتظر خصمك ولم يردّ عليه يثبت، وما ينتظرك ولم تفعله يسقط، ويُكتب في النتيجة أنه حُسم بالسكوت. ويمكنك أن تتهم خصمك بالتناقض بين قولين له.",
      },
    },
    {
      title: { en: "An argument, not an audience", ar: "الحجة لا الجمهور" },
      body: {
        en: "Others can read public debates, but cannot comment, vote or react, so nobody wins by mockery. Mocking phrases are left out of an argument before it is published.",
        ar: "يقرأ الناس المناظرات العامة، لكن لا تعليق ولا تصويت ولا إعجاب، فلا أحد يكسب بالسخرية. وتُبعَد العبارات الساخرة من الحجة قبل نشرها.",
      },
    },
    {
      title: { en: "Public or private", ar: "عامة أو خاصة" },
      body: {
        en: "A public debate is shown to readers after review. A private one is seen only by its two sides.",
        ar: "المناظرة العامة يقرؤها الناس بعد المراجعة، والخاصة لا يراها إلا طرفاها.",
      },
    },
  ],
  screenshots: [
    {
      src: "/images/apps/munazara-shot.webp",
      shape: "wide",
      caption: {
        en: "Writing an argument, a debate with what is waiting on you, and the welcome screen",
        ar: "كتابة حجة، ومناظرة فيها ما ينتظرك، وشاشة الترحيب",
      },
    },
  ],
  sections: [
    {
      title: { en: "Fair-play charter", ar: "ميثاق المناظرة" },
      intro: {
        en: "Adapted from the classical etiquette of debate (adab al-munazara).",
        ar: "مقتبس بتصرّف من آداب البحث والمناظرة.",
      },
      items: [
        { title: { en: "1", ar: "الأول" }, body: { en: "We aim for the truth to appear, even through the other side.", ar: "قصدنا ظهور الحق ولو على يد صاحبي." } },
        { title: { en: "2", ar: "الثاني" }, body: { en: "Don't object before you understand: ask \"what do you mean?\" first.", ar: "لا أعترض على كلامٍ حتى أفهم مراده؛ «ما المقصود؟» أولاً." } },
        { title: { en: "3", ar: "الثالث" }, body: { en: "Whoever claims owes a proof; whoever quotes owes the source.", ar: "على من ادّعى الدليل، ومن نقل فعليه صحة النقل." } },
        { title: { en: "4", ar: "الرابع" }, body: { en: "No mockery or belittling.", ar: "لا سخرية ولا تحقير." } },
        { title: { en: "5", ar: "الخامس" }, body: { en: "No outside coaching during a debate.", ar: "لا يُستعان بأحد أثناء المناظرة." } },
      ],
    },
  ],
}
