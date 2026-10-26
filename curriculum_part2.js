// ============================================================================
// DUTCHLINGO CURRICULUM: W7 - W12 (Μήνες 2-4: Καθημερινότητα, Σύνταξη & Παρελθόν)
// ============================================================================

const CURRICULUM_PART_2 = [
  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 7: ΑΡΙΘΜΟΙ (0-20), ΩΡΑ & ΠΑΡΑΓΓΕΛΙΑ ΣΕ ΚΑΦΕ/ΕΣΤΙΑΤΟΡΙΟ
  // ==========================================================================
  {
    week: 7,
    month: "Μήνας 2: Ομαλά Ρήματα & Επικοινωνία",
    title: "Εβδομάδα 7: Αριθμοί (1-20) & Παραγγελία σε Καφέ",
    subtitle: "Πώς μετράμε στα Ολλανδικά & πώς παραγγέλνουμε με το «Ik wil graag...»",
    color: "orange",
    icon: "☕",
    rule: `
      <strong>Πώς παραγγέλνουμε ευγενικά:</strong> Χρησιμοποιούμε τη φράση <strong>Ik wil graag...</strong> (Θα ήθελα...) ή το ρήμα <strong>drinken</strong> (πίνω) / <strong>eten</strong> (τρώω).<br><br>
      <strong>Κανόνας Πληθυντικού Ουσιαστικών:</strong> Τα περισσότερα ουσιαστικά παίρνουν <strong>-en</strong> στον πληθυντικό (π.χ. <em>één broodje -> twee broodjes</em>, <em>één kopje -> twee kopjes</em>).
    `,
    table: [
      { nl: "één, twee, drie, vier, vijf", ph: "έιν, τβέι, ντρι, φιρ, φάιφ", el: "1, 2, 3, 4, 5", note: "Αριθμοί 1-5" },
      { nl: "zes, zeven, acht, negen, tien", ph: "ζες, ζέιβεν, αχτ, νέιχεν, τιν", el: "6, 7, 8, 9, 10", note: "Αριθμοί 6-10" },
      { nl: "twintig / euro", ph: "τβίντιχ / έουρο", el: "20 / ευρώ", note: "π.χ. tien euro = 10 ευρώ" },
      { nl: "Ik wil graag...", ph: "Ικ βιλ χράαχ...", el: "Θα ήθελα... (κυριολ.: Θέλω ευχαρίστως)", note: "Η #1 φράση για παραγγελίες" },
      { nl: "de thee / het bier / de melk", ph: "ντε τέι / χετ μπιρ / ντε μελκ", el: "το τσάι / η μπύρα / το γάλα", note: "Ποτά" },
      { nl: "het brood / de kaas", ph: "χετ μπρόοτ / ντε κάας", el: "το ψωμί / το τυρί", note: "Φαγητό" },
      { nl: "drinken / eten", ph: "ντρίνκεν / έιτεν", el: "πίνω / τρώω", note: "ik drink, ik eet" }
    ],
    questions: [
      {
        level: 1, type: "choice",
        label: "Ποιοι είναι οι αριθμοί «ένα, δύο, τρία»;",
        dutchAudio: "één twee drie",
        promptMain: "1, 2, 3",
        promptSub: "Διάλεξε τη σωστή σειρά στα Ολλανδικά",
        options: ["één, twee, drie", "vier, vijf, zes", "zeven, acht, negen", "twee, vier, tien"],
        correctAnswer: "één, twee, drie",
        explanation: "één (1), twee (2), drie (3)!"
      },
      {
        level: 2, type: "choice",
        label: "Πόσο κάνει «τέσσερα» και «πέντε»;",
        dutchAudio: "vier en vijf",
        promptMain: "vier en vijf",
        promptSub: "Το «v» προφέρεται σαν ελαφρύ «φ»",
        options: ["4 και 5", "6 και 7", "8 και 9", "2 και 3"],
        correctAnswer: "4 και 5",
        explanation: "vier = 4, vijf = 5."
      },
      {
        level: 3, type: "fill",
        label: "Πώς λέμε ευγενικά «Θα ήθελα έναν καφέ»;",
        dutchAudio: "Ik wil graag een koffie",
        promptMain: "Ik wil ___ een koffie.",
        promptSub: "Η λέξη που κάνει το «θέλω» ευγενικό («ευχαρίστως»)",
        options: ["graag", "twee", "eten", "honger"],
        correctAnswer: "graag",
        explanation: "Ik wil graag... = Θα ήθελα..."
      },
      {
        level: 4, type: "fill",
        label: "Συμπλήρωσε το ρήμα «drinken» (πίνω)",
        dutchAudio: "Hij drinkt thee",
        promptMain: "Hij ___ thee.",
        promptSub: "Αυτός πίνει τσάι (Ρίζα + t)",
        options: ["drinkt", "drink", "drinken", "eet"],
        correctAnswer: "drinkt",
        explanation: "Hij drinkt thee = Αυτός πίνει τσάι."
      },
      {
        level: 5, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Wij eten brood met kaas",
        promptMain: "Wij eten brood met kaas.",
        promptSub: "met = με",
        options: [
          "Εμείς τρώμε ψωμί με τυρί.",
          "Εμείς πίνουμε καφέ με γάλα.",
          "Αυτοί αγοράζουν ψωμί και τυρί.",
          "Εγώ τρώω ψωμί με τυρί."
        ],
        correctAnswer: "Εμείς τρώμε ψωμί με τυρί.",
        explanation: "Wij eten (Εμείς τρώμε) + brood (ψωμί) + met kaas (με τυρί)."
      },
      {
        level: 6, type: "choice",
        label: "Πόσα ευρώ είναι «tien euro»;",
        dutchAudio: "tien euro alstublieft",
        promptMain: "Tien euro, alstublieft.",
        promptSub: "Διάλεξε το σωστό ποσό",
        options: ["10 ευρώ, παρακαλώ.", "2 ευρώ, παρακαλώ.", "20 ευρώ, παρακαλώ.", "8 ευρώ, παρακαλώ."],
        correctAnswer: "10 ευρώ, παρακαλώ.",
        explanation: "tien = 10, ενώ twintig = 20."
      },
      {
        level: 7, type: "fill",
        label: "Ποιο άρθρο παίρνει η μπύρα (bier) και το ψωμί (brood);",
        dutchAudio: "het bier en het brood",
        promptMain: "___ bier / ___ brood",
        promptSub: "Είναι και τα δύο ουδέτερες λέξεις!",
        options: ["het", "de", "een", "twee"],
        correctAnswer: "het",
        explanation: "Λέμε «het bier» (η μπύρα) και «het brood» (το ψωμί), αλλά «de koffie» και «de thee»!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik drink koffie en water",
        promptMain: "Εγώ πίνω καφέ και νερό",
        promptSub: "Χρησιμοποίησε το ρήμα drinken",
        wordBank: ["Ik", "drink", "koffie", "en", "water", "drinkt", "eet"],
        acceptedAnswers: ["ik drink koffie en water"],
        displayCorrect: "Ik drink koffie en water",
        explanation: "Ik drink (σκέτη ρίζα) koffie en water."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Twee koffie en drie thee alstublieft",
        promptMain: "Δύο καφέδες και τρία τσάγια παρακαλώ",
        promptSub: "Στις παραγγελίες λέμε απλά τον αριθμό + το ρόφημα στον ενικό!",
        wordBank: ["Twee", "koffie", "en", "drie", "thee", "alstublieft", "vier"],
        acceptedAnswers: ["twee koffie en drie thee alstublieft"],
        displayCorrect: "Twee koffie en drie thee, alstublieft",
        explanation: "Twee koffie (δύο καφέδες) en drie thee (και τρία τσάγια), alstublieft!"
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Παραγγελία στην Ολλανδία!",
        dutchAudio: "Ik wil graag twee koffie en brood met kaas",
        promptMain: "Θα ήθελα δύο καφέδες και ψωμί με τυρί",
        promptSub: "Τελική δοκιμασία Εβδομάδας 7 (με = met)!",
        wordBank: ["Ik", "wil", "graag", "twee", "koffie", "en", "brood", "met", "kaas"],
        acceptedAnswers: ["ik wil graag twee koffie en brood met kaas"],
        displayCorrect: "Ik wil graag twee koffie en brood met kaas",
        explanation: "Συγχαρητήρια! Είσαι έτοιμος να παραγγείλεις σε οποιοδήποτε καφέ στο Άμστερνταμ!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 8: Η ΑΡΝΗΣΗ «NIET» VS «GEEN» (Ο ΠΙΟ ΣΗΜΑΝΤΙΚΟΣ ΚΑΝΟΝΑΣ!)
  // ==========================================================================
  {
    week: 8,
    month: "Μήνας 2: Ομαλά Ρήματα & Επικοινωνία",
    title: "Εβδομάδα 8: Η Άρνηση «niet» vs «geen» (Δεν / Κανένας)",
    subtitle: "Πότε βάζουμε «niet» και πότε «geen» για να πούμε «δεν» στα Ολλανδικά!",
    color: "purple",
    icon: "🚫",
    rule: `
      <strong>Ο Κανόνας «niet» vs «geen» (Πολύ Σημαντικό!):</strong> Στα Ολλανδικά υπάρχουν 2 λέξεις για το «δεν»:<br>
      1. <strong>geen:</strong> Μπαίνει <strong>ΜΟΝΟ μπροστά από ουσιαστικά</strong> που είτε έχουν αόριστο άρθρο (<em>een</em>) είτε δεν έχουν καθόλου άρθρο!<br>
         • <em>Ik heb <strong>een</strong> auto -> Ik heb <strong>geen</strong> auto</em> (Δεν έχω αυτοκίνητο).<br>
         • <em>Ik heb tijd -> Ik heb <strong>geen</strong> tijd</em> (Δεν έχω χρόνο).<br>
      2. <strong>niet:</strong> Μπαίνει <strong>παντού αλλού</strong>! (με ρήματα, επίθετα, επιρρήματα και ουσιαστικά με <em>de/het</em>):<br>
         • <em>Ik werk <strong>niet</strong></em> (Δεν δουλεύω) | <em>Ik ben <strong>niet</strong> moe</em> (Δεν είμαι κουρασμένος).
    `,
    table: [
      { nl: "geen + ουσιαστικό", ph: "χέιν", el: "δεν (για αόριστα ουσιαστικά)", note: "Αντικαθιστά το 'een' ή μπαίνει σε ουσ. χωρίς άρθρο" },
      { nl: "Ik heb geen tijd / geen geld", ph: "Ικ χεμπ χέιν τάιτ / χέιν χελτ", el: "Δεν έχω χρόνο / Δεν έχω χρήματα", note: "geld = χρήματα" },
      { nl: "Ik heb geen auto", ph: "Ικ χεμπ χέιν άουτο", el: "Δεν έχω αυτοκίνητο", note: "Ποτέ 'niet een auto' -> πάντα 'geen auto'!" },
      { nl: "niet (με ρήματα/επίθετα)", ph: "νιτ", el: "δεν / όχι", note: "Για ρήματα, επίθετα, τοπικά & de/het" },
      { nl: "Ik ben niet blij", ph: "Ικ μπεν νιτ μπλάι", el: "Δεν είμαι χαρούμενος", note: "Πριν από επίθετο -> niet" },
      { nl: "Hij werkt niet hier", ph: "Χάι βερκτ νιτ χιρ", el: "Αυτός δεν δουλεύει εδώ", note: "Ρήμα/επίρρημα -> niet" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Πώς λέμε «Δεν έχω αυτοκίνητο» (αντικαθιστώντας το «een auto»);",
        dutchAudio: "Ik heb geen auto",
        promptMain: "Ik heb ___ auto.",
        promptSub: "Ουσιαστικό με αόριστο άρθρο -> niet ή geen;",
        options: ["geen", "niet", "nee", "een"],
        correctAnswer: "geen",
        explanation: "Μπροστά από ουσιαστικό με «een» βάζουμε ΠΑΝΤΑ «geen» (Ik heb geen auto)!"
      },
      {
        level: 2, type: "fill",
        label: "Πώς λέμε «Δεν είμαι κουρασμένος»;",
        dutchAudio: "Ik ben niet moe",
        promptMain: "Ik ben ___ moe.",
        promptSub: "Το «moe» (κουρασμένος) είναι επίθετο, όχι ουσιαστικό!",
        options: ["niet", "geen", "nee", "nooit"],
        correctAnswer: "niet",
        explanation: "Πριν από επίθετα (moe, blij) βάζουμε πάντα «niet»!"
      },
      {
        level: 3, type: "fill",
        label: "Πώς λέμε «Αυτός δεν δουλεύει»;",
        dutchAudio: "Hij werkt niet",
        promptMain: "Hij werkt ___.",
        promptSub: "Αρνούμαστε σκέτο το ρήμα (werkt)",
        options: ["niet", "geen", "nee", "niks"],
        correctAnswer: "niet",
        explanation: "Όταν αρνούμαστε ένα ρήμα, το «niet» μπαίνει μετά το ρήμα: Hij werkt niet!"
      },
      {
        level: 4, type: "fill",
        label: "Πώς λέμε «Δεν έχω χρόνο»;",
        dutchAudio: "Ik heb geen tijd",
        promptMain: "Ik heb ___ tijd.",
        promptSub: "Το «tijd» (χρόνος) είναι ουσιαστικό χωρίς άρθρο!",
        options: ["geen", "niet", "nee", "een"],
        correctAnswer: "geen",
        explanation: "Τα ουσιαστικά χωρίς άρθρο (tijd, honger, geld, water) παίρνουν ΠΑΝΤΑ «geen»!"
      },
      {
        level: 5, type: "choice",
        label: "Ποια είναι η σωστή άρνηση για το «Hij spreekt Nederlands»;",
        dutchAudio: "Hij spreekt geen Nederlands",
        promptMain: "Αυτός δεν μιλάει Ολλανδικά.",
        promptSub: "Οι γλώσσες θεωρούνται ουσιαστικά χωρίς άρθρο!",
        options: [
          "Hij spreekt geen Nederlands.",
          "Hij geen spreekt Nederlands.",
          "Hij spreekt nee Nederlands.",
          "Hij niet spreekt Nederlands."
        ],
        correctAnswer: "Hij spreekt geen Nederlands.",
        explanation: "Με τις γλώσσες χρησιμοποιούμε «geen»: Ik spreek geen Nederlands / Hij spreekt geen Engels."
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Wij hebben geen geld",
        promptMain: "Wij hebben geen geld.",
        promptSub: "geld = χρήματα",
        options: [
          "Εμείς δεν έχουμε χρήματα.",
          "Εμείς δεν έχουμε χρόνο.",
          "Αυτοί δεν έχουν δουλειά.",
          "Εμείς έχουμε χρήματα."
        ],
        correctAnswer: "Εμείς δεν έχουμε χρήματα.",
        explanation: "Wij hebben geen geld = Εμείς δεν έχουμε χρήματα."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε με niet ή geen",
        dutchAudio: "Zij woont niet in Nederland",
        promptMain: "Zij woont ___ in Nederland.",
        promptSub: "Πριν από πρόθεση («in Nederland») τι βάζουμε;",
        options: ["niet", "geen", "nee", "een"],
        correctAnswer: "niet",
        explanation: "Πριν από προθέσεις τόπου (in Nederland, hier, daar) βάζουμε ΠΑΝΤΑ «niet»!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik drink geen koffie",
        promptMain: "Εγώ δεν πίνω καφέ",
        promptSub: "Ο «καφές» (koffie) είναι ουσιαστικό χωρίς άρθρο!",
        wordBank: ["Ik", "drink", "geen", "koffie", "niet", "thee"],
        acceptedAnswers: ["ik drink geen koffie"],
        displayCorrect: "Ik drink geen koffie",
        explanation: "Ik drink geen koffie (επειδή το koffie είναι ουσιαστικό χωρίς άρθρο)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Jij bent niet hier",
        promptMain: "Εσύ δεν είσαι εδώ",
        promptSub: "Πριν από το επίρρημα «hier» (εδώ)",
        wordBank: ["Jij", "bent", "niet", "hier", "geen", "daar"],
        acceptedAnswers: ["jij bent niet hier", "je bent niet hier"],
        displayCorrect: "Jij bent niet hier",
        explanation: "Jij bent niet hier!"
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Συνδύασε «geen» και «niet»!",
        dutchAudio: "Ik heb geen tijd en ik werk niet",
        promptMain: "Εγώ δεν έχω χρόνο και εγώ δεν δουλεύω",
        promptSub: "Τελική δοκιμασία Μήνα 2!",
        wordBank: ["Ik", "heb", "geen", "tijd", "en", "ik", "werk", "niet"],
        acceptedAnswers: ["ik heb geen tijd en ik werk niet"],
        displayCorrect: "Ik heb geen tijd en ik werk niet",
        explanation: "ΑΡΙΣΤΑ! Ξεχωρίζεις πλέον το «geen» (πριν από ουσιαστικό) από το «niet» (με ρήμα)!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 9: ΕΡΩΤΗΣΕΙΣ & ΑΝΤΙΣΤΡΟΦΗ (INVERSION - ΠΑΓΙΔΑ ΤΟΥ -T!)
  // ==========================================================================
  {
    week: 9,
    month: "Μήνας 3: Σύνταξη, Ερωτήσεις & Καθημερινότητα",
    title: "Εβδομάδα 9: Ερωτήσεις & Η Παγίδα του «jij» (Inversion)",
    subtitle: "Πώς κάνουμε ερωτήσεις (Waar, Wat, Wie) & γιατί χάνεται το -t πριν το «jij»!",
    color: "blue",
    icon: "❓",
    rule: `
      <strong>Κανόνας #1 (Πώς κάνουμε ερώτηση):</strong> Βάζουμε το ρήμα <strong>πριν</strong> από το πρόσωπο! π.χ. <em>Hij werkt -> Werkt hij?</em> (Δουλεύει αυτός;).<br><br>
      <strong>Κανόνας #2 (Η ΠΑΓΙΔΑ του «jij» στην αντιστροφή!):</strong> Όταν το <strong>jij (ή je)</strong> μπαίνει <strong>ΜΕΤΑ</strong> το ρήμα (π.χ. σε ερώτηση), <strong>το ρήμα ΧΑΝΕΙ το -t!</strong><br>
      • Κατάφαση: <em>Jij woon<strong>t</strong></em> (Εσύ μένεις) | <em>Jij ben<strong>t</strong></em> (Εσύ είσαι) | <em>Jij heb<strong>t</strong></em> (Εσύ έχεις)<br>
      • Ερώτηση: <em>Waar <strong>woon jij</strong>?</em> (ΟΧΙ woont jij!) | <em><strong>Ben jij</strong> moe?</em> | <em><strong>Heb jij</strong> tijd?</em>
    `,
    table: [
      { nl: "Waar / Wat / Wie", ph: "Βάαρ / Βατ / Βι", el: "Πού / Τι / Ποιος", note: "Ερωτηματικές λέξεις" },
      { nl: "Waarom / Wanneer / Hoe", ph: "Βαρόμ / Βανέιρ / Χου", el: "Γιατί / Πότε / Πώς", note: "Ερωτηματικές λέξεις" },
      { nl: "Jij woont -> Woon jij?", ph: "Γιάι βόοντ -> Βόον γιάι;", el: "Εσύ μένεις -> Μένεις εσύ;", note: "ΧΑΝΕΤΑΙ το -t όταν το jij ακολουθεί!" },
      { nl: "Jij bent -> Ben jij?", ph: "Γιάι μπεντ -> Μπεν γιάι;", el: "Εσύ είσαι -> Είσαι εσύ;", note: "ΧΑΝΕΤΑΙ το -t!" },
      { nl: "Jij hebt -> Heb jij?", ph: "Γιάι χεμπτ -> Χεμπ γιάι;", el: "Εσύ έχεις -> Έχεις εσύ;", note: "ΧΑΝΕΤΑΙ το -t!" },
      { nl: "Hij werkt -> Werkt hij?", ph: "Χάι βερκτ -> Βερκτ χάι;", el: "Αυτός δουλεύει -> Δουλεύει αυτός;", note: "Στο hij/zij/u το -t ΜΕΝΕΙ κανονικά!" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Εφάρμοσε τον κανόνα της αντιστροφής με το «jij»!",
        dutchAudio: "Waar woon jij",
        promptMain: "Waar ___ jij?",
        promptSub: "Όταν το «jij» μπαίνει ΜΕΤΑ το ρήμα, τι παθαίνει το -t;",
        options: ["woon", "woont", "wonen", "woonen"],
        correctAnswer: "woon",
        explanation: "ΠΡΟΣΟΧΗ: Λέμε «Jij woont», αλλά στην ερώτηση («...jij?») το -t πέφτει: «Waar woon jij?»!"
      },
      {
        level: 2, type: "fill",
        label: "Πώς ρωτάμε «Έχεις εσύ χρόνο;»;",
        dutchAudio: "Heb jij tijd",
        promptMain: "___ jij tijd?",
        promptSub: "Το «jij» βρίσκεται μετά το ρήμα!",
        options: ["Heb", "Hebt", "Heeft", "Hebben"],
        correctAnswer: "Heb",
        explanation: "Jij hebt tijd -> ΑΛΛΑ στην ερώτηση: Heb jij tijd? (χωρίς -t)!"
      },
      {
        level: 3, type: "fill",
        label: "Πώς ρωτάμε «Είσαι εσύ κουρασμένος;»;",
        dutchAudio: "Ben jij moe",
        promptMain: "___ jij moe?",
        promptSub: "Διάλεξε τον σωστό τύπο του zijn πριν το jij",
        options: ["Ben", "Bent", "Is", "Zijn"],
        correctAnswer: "Ben",
        explanation: "Jij bent moe -> ΑΛΛΑ στην ερώτηση: Ben jij moe?!"
      },
      {
        level: 4, type: "fill",
        label: "Τι γίνεται όμως όταν ρωτάμε για το «hij» (αυτός);",
        dutchAudio: "Waar werkt hij",
        promptMain: "Waar ___ hij?",
        promptSub: "Χάνεται το -t στο «hij» ή ΜΟΝΟ στο «jij»;",
        options: ["werkt", "werk", "werken", "werke"],
        correctAnswer: "werkt",
        explanation: "Το -t χάνεται ΜΟΝΟ στο «jij»! Στο «hij / zij / u» το -t παραμένει κανονικά: Waar werkt hij?"
      },
      {
        level: 5, type: "choice",
        label: "Ποια ερωτηματική λέξη σημαίνει «Πού», «Τι» και «Ποιος»;",
        dutchAudio: "Waar Wat Wie",
        promptMain: "Πού; / Τι; / Ποιος;",
        promptSub: "Διάλεξε τη σωστή τριάδα",
        options: [
          "Waar? / Wat? / Wie?",
          "Wat? / Waar? / Hoe?",
          "Wie? / Waarom? / Wanneer?",
          "Hoe? / Waar? / Wanneer?"
        ],
        correctAnswer: "Waar? / Wat? / Wie?",
        explanation: "Waar = Πού, Wat = Τι, Wie = Ποιος!"
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την ερώτηση στα Ελληνικά",
        dutchAudio: "Wat drink jij",
        promptMain: "Wat drink jij?",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: [
          "Τι πίνεις εσύ;",
          "Πού πίνεις καφέ;",
          "Ποιος πίνει νερό;",
          "Γιατί πίνεις εσύ;"
        ],
        correctAnswer: "Τι πίνεις εσύ;",
        explanation: "Wat (Τι) + drink jij (πίνεις εσύ - χωρίς -t!)."
      },
      {
        level: 7, type: "choice",
        label: "Μετάφρασε την ερώτηση στα Ελληνικά",
        dutchAudio: "Wie is die man",
        promptMain: "Wie is die man?",
        promptSub: "die man = εκείνος ο άντρας",
        options: [
          "Ποιος είναι εκείνος ο άντρας;",
          "Πού είναι εκείνος ο άντρας;",
          "Τι κάνει εκείνος ο άντρας;",
          "Πώς λέγεται ο άντρας;"
        ],
        correctAnswer: "Ποιος είναι εκείνος ο άντρας;",
        explanation: "Wie (Ποιος) + is (είναι) + die man (εκείνος ο άντρας)."
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε την ερώτηση στα Ολλανδικά",
        dutchAudio: "Spreek jij Nederlands",
        promptMain: "Μιλάς εσύ Ολλανδικά;",
        promptSub: "Προσοχή στην παγίδα του -t πριν το jij!",
        wordBank: ["Spreek", "jij", "Nederlands", "Spreekt", "Spreken"],
        acceptedAnswers: ["spreek jij nederlands", "spreek je nederlands"],
        displayCorrect: "Spreek jij Nederlands?",
        explanation: "Spreek jij Nederlands? (Χωρίς -t επειδή το jij ακολουθεί το ρήμα!)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε την ερώτηση στα Ολλανδικά",
        dutchAudio: "Waar wonen jullie",
        promptMain: "Πού μένετε εσείς (παρέα);",
        promptSub: "Φτιάξε την ερώτηση",
        wordBank: ["Waar", "wonen", "jullie", "Wat", "woont"],
        acceptedAnswers: ["waar wonen jullie"],
        displayCorrect: "Waar wonen jullie?",
        explanation: "Waar (Πού) + wonen (μένετε) + jullie (εσείς)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Ερώτηση + Απάντηση!",
        dutchAudio: "Waar woon jij en waar werk jij",
        promptMain: "Πού μένεις εσύ και πού δουλεύεις εσύ;",
        promptSub: "Τελική δοκιμασία Εβδομάδας 9!",
        wordBank: ["Waar", "woon", "jij", "en", "waar", "werk", "jij", "woont", "werkt"],
        acceptedAnswers: ["waar woon jij en waar werk jij", "waar woon je en waar werk je"],
        displayCorrect: "Waar woon jij en waar werk jij?",
        explanation: "ΤΕΛΕΙΑ! Δεν έπεσες στην παγίδα του -t! Waar woon jij en waar werk jij?"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 10: Ο ΚΑΝΟΝΑΣ V2 (ΣΕΙΡΑ ΛΕΞΕΩΝ) & ΧΡΟΝΟΣ/ΗΜΕΡΕΣ
  // ==========================================================================
  {
    week: 10,
    month: "Μήνας 3: Σύνταξη, Ερωτήσεις & Καθημερινότητα",
    title: "Εβδομάδα 10: Ο Κανόνας V2 (Σειρά Λέξεων) & Ημέρες",
    subtitle: "Γιατί το ρήμα μπαίνει ΠΑΝΤΑ στη 2η θέση: «Vandaag werk ik»!",
    color: "green",
    icon: "📐",
    rule: `
      <strong>Ο Κανόνας V2 (Verb Second - Το Μυστικό της Ολλανδικής Σύνταξης!):</strong><br>
      Στα Ολλανδικά το ρήμα πρέπει να βρίσκεται <strong>ΠΑΝΤΑ στη 2η θέση</strong> της πρότασης!<br>
      • Κανονική σειρά: <strong>1. Ik</strong> | <strong>2. werk</strong> | 3. vandaag (Σήμερα δουλεύω).<br>
      • Αν ξεκινήσεις την πρόταση με τον χρόνο (π.χ. <em>Vandaag</em> = Σήμερα), το ρήμα ΠΡΕΠΕΙ να μείνει 2ο, άρα το πρόσωπο πηγαίνει 3ο!<br>
      👉 <strong>1. Vandaag</strong> | <strong>2. werk</strong> | <strong>3. ik</strong> (ΟΧΙ <em>Vandaag ik werk</em>!).
    `,
    table: [
      { nl: "vandaag / morgen", ph: "φαντάαχ / μόρχεν", el: "σήμερα / αύριο", note: "Αν μπουν στην αρχή -> αντιστροφή (V2)!" },
      { nl: "nu / altijd / vaak", ph: "νου / άλτάιτ / φάακ", el: "τώρα / πάντα / συχνά", note: "Χρονικά επιρρήματα" },
      { nl: "maandag, dinsdag, woensdag", ph: "μάανταχ, ντίνζνταχ, βούνζνταχ", el: "Δευτέρα, Τρίτη, Τετάρτη", note: "Ημέρες" },
      { nl: "donderdag, vrijdag, weekend", ph: "ντόντερνταχ, φράινταχ, βίκεντ", el: "Πέμπτη, Παρασκευή, Σαββατοκύριακο", note: "het weekend" },
      { nl: "Vandaag werk ik", ph: "Φαντάαχ βερκ ικ", el: "Σήμερα δουλεύω εγώ", note: "1. Vandaag + 2. Ρήμα (werk) + 3. Πρόσωπο (ik)" },
      { nl: "Morgen ga ik naar Amsterdam", ph: "Μόρχεν χα ικ νάαρ Άμστερνταμ", el: "Αύριο πηγαίνω στο Άμστερνταμ", note: "gaan = πηγαίνω (ik ga, jij/hij gaat)" }
    ],
    questions: [
      {
        level: 1, type: "choice",
        label: "Εφάρμοσε τον Κανόνα V2: Πώς λέμε «Σήμερα δουλεύω» αν ξεκινήσουμε με το «Vandaag»;",
        dutchAudio: "Vandaag werk ik",
        promptMain: "Σήμερα δουλεύω.",
        promptSub: "Θυμήσου: Το ρήμα ΠΡΕΠΕΙ να είναι στη 2η θέση!",
        options: [
          "Vandaag werk ik.",
          "Vandaag ik werk.",
          "Ik vandaag werk.",
          "Werk vandaag ik."
        ],
        correctAnswer: "Vandaag werk ik.",
        explanation: "1η θέση: Vandaag | 2η θέση (Ρήμα): werk | 3η θέση (Πρόσωπο): ik!"
      },
      {
        level: 2, type: "fill",
        label: "Συμπλήρωσε με τη σωστή σειρά (Κανόνας V2)",
        dutchAudio: "Morgen werkt hij niet",
        promptMain: "Morgen ___ niet. (Αύριο αυτός δεν δουλεύει)",
        promptSub: "Τι μπαίνει αμέσως μετά το «Morgen»;",
        options: ["werkt hij", "hij werkt", "werken hij", "hij werk"],
        correctAnswer: "werkt hij",
        explanation: "Μετά το «Morgen» (1η θέση) μπαίνει αμέσως το ρήμα «werkt» (2η θέση) και μετά το «hij»!"
      },
      {
        level: 3, type: "fill",
        label: "Συνδύασε τον Κανόνα V2 + την παγίδα του «jij»!",
        dutchAudio: "Nu spreek jij Nederlands",
        promptMain: "Nu ___ jij Nederlands. (Τώρα μιλάς εσύ Ολλανδικά)",
        promptSub: "Επειδή το «jij» πηγαίνει μετά το ρήμα λόγω V2, τι παθαίνει το -t;",
        options: ["spreek", "spreekt", "spreken", "spreeke"],
        correctAnswer: "spreek",
        explanation: "Επειδή λόγω V2 έγινε αντιστροφή (Nu spreek jij), το ρήμα πριν το jij χάνει το -t!"
      },
      {
        level: 4, type: "choice",
        label: "Τι σημαίνουν οι λέξεις «vandaag», «morgen» και «nu»;",
        dutchAudio: "vandaag morgen nu",
        promptMain: "vandaag / morgen / nu",
        promptSub: "Διάλεξε τη σωστή τριάδα",
        options: [
          "σήμερα / αύριο / τώρα",
          "χθες / σήμερα / αύριο",
          "πάντα / συχνά / τώρα",
          "Δευτέρα / Τρίτη / Τετάρτη"
        ],
        correctAnswer: "σήμερα / αύριο / τώρα",
        explanation: "vandaag = σήμερα, morgen = αύριο, nu = τώρα."
      },
      {
        level: 5, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Op maandag en dinsdag werken wij",
        promptMain: "Op maandag en dinsdag werken wij.",
        promptSub: "op maandag = τη Δευτέρα",
        options: [
          "Τη Δευτέρα και την Τρίτη εμείς δουλεύουμε.",
          "Την Τετάρτη και την Πέμπτη εμείς δουλεύουμε.",
          "Τη Δευτέρα αυτοί δεν δουλεύουν.",
          "Το Σαββατοκύριακο εμείς ξεκουραζόμαστε."
        ],
        correctAnswer: "Τη Δευτέρα και την Τρίτη εμείς δουλεύουμε.",
        explanation: "Op maandag en dinsdag (1η θέση) + werken (2η θέση) + wij (3η θέση)."
      },
      {
        level: 6, type: "fill",
        label: "Το ρήμα «gaan» (πηγαίνω): Πώς λέμε «Αύριο πηγαίνω στην Ολλανδία»;",
        dutchAudio: "Morgen ga ik naar Nederland",
        promptMain: "Morgen ___ naar Nederland.",
        promptSub: "naar = προς / σε",
        options: ["ga ik", "ik ga", "gaat ik", "gaan ik"],
        correctAnswer: "ga ik",
        explanation: "Morgen (1) + ga (2 - ρήμα) + ik (3 - πρόσωπο) naar Nederland!"
      },
      {
        level: 7, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά (Ξεκίνα με το «Vandaag»!)",
        dutchAudio: "Vandaag ben ik moe",
        promptMain: "Σήμερα είμαι εγώ κουρασμένος",
        promptSub: "Εφάρμοσε τον κανόνα V2!",
        wordBank: ["Vandaag", "ben", "ik", "moe", "is", "Morgen"],
        acceptedAnswers: ["vandaag ben ik moe"],
        displayCorrect: "Vandaag ben ik moe",
        explanation: "Vandaag (1) + ben (2) + ik (3) moe!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά (Ξεκίνα με το «Morgen»!)",
        dutchAudio: "Morgen hebben wij tijd",
        promptMain: "Αύριο έχουμε εμείς χρόνο",
        promptSub: "1. Morgen + 2. Ρήμα + 3. Πρόσωπο",
        wordBank: ["Morgen", "hebben", "wij", "tijd", "Vandaag", "heeft"],
        acceptedAnswers: ["morgen hebben wij tijd", "morgen hebben we tijd"],
        displayCorrect: "Morgen hebben wij tijd",
        explanation: "Morgen (1) + hebben (2) + wij (3) tijd!"
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά (Ξεκίνα με το «Nu» = Τώρα!)",
        dutchAudio: "Nu drink ik koffie",
        promptMain: "Τώρα πίνω εγώ καφέ",
        promptSub: "Μην ξεχάσεις το ρήμα στη 2η θέση!",
        wordBank: ["Nu", "drink", "ik", "koffie", "drinkt", "water"],
        acceptedAnswers: ["nu drink ik koffie"],
        displayCorrect: "Nu drink ik koffie",
        explanation: "Nu (1) + drink (2) + ik (3) koffie!"
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Ο Βασιλιάς του Κανόνα V2!",
        dutchAudio: "Vandaag werk ik en morgen heb ik tijd",
        promptMain: "Σήμερα δουλεύω εγώ και αύριο έχω εγώ χρόνο",
        promptSub: "Και στα δύο μέρη της πρότασης εφαρμόζεται ο Κανόνας V2!",
        wordBank: ["Vandaag", "werk", "ik", "en", "morgen", "heb", "ik", "tijd"],
        acceptedAnswers: ["vandaag werk ik en morgen heb ik tijd"],
        displayCorrect: "Vandaag werk ik en morgen heb ik tijd",
        explanation: "ΑΠΙΣΤΕΥΤΟΣ! Κατέκτησες τον Κανόνα V2, το πιο σημαντικό μυστικό της ολλανδικής σύνταξης!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 11: ΕΠΙΘΕΤΑ (Ο ΚΑΝΟΝΑΣ ΤΟΥ -E) & ΧΩΡΙΖΟΜΕΝΑ ΡΗΜΑΤΑ
  // ==========================================================================
  {
    week: 11,
    month: "Μήνας 3: Σύνταξη, Ερωτήσεις & Καθημερινότητα",
    title: "Εβδομάδα 11: Επίθετα (Κανόνας του -e) & Βασικά Βοηθητικά (kunnen, moeten)",
    subtitle: "Πότε το επίθετο παίρνει -e (grote vs groot) & τα ρήματα «μπορώ» / «πρέπει»",
    color: "orange",
    icon: "🎨",
    rule: `
      <strong>Κανόνας #1 (Κατάληξη -e στα Επίθετα):</strong> Όταν το επίθετο μπαίνει ΠΡΙΝ από το ουσιαστικό, παίρνει σχεδόν πάντα <strong>-e</strong> (π.χ. <em>de grot<strong>e</strong> man, het grot<strong>e</strong> huis</em>).<br>
      ❗ <strong>Η ΜΟΝΑΔΙΚΗ ΕΞΑΙΡΕΣΗ:</strong> Δεν παίρνει -e ΜΟΝΟ όταν έχουμε <strong>een + het-λέξη</strong>! π.χ. <em>een <strong>groot</strong> huis</em> (ένα μεγάλο σπίτι), <em>een <strong>klein</strong> kind</em> (ένα μικρό παιδί)!<br><br>
      <strong>Κανόνας #2 (Βοηθητικά ρήματα):</strong> Όταν έχουμε <strong>moeten</strong> (πρέπει), <strong>kunnen</strong> (μπορώ) ή <strong>willen</strong> (θέλω), το 2ο ρήμα πηγαίνει στο <strong>ΤΕΛΟΣ της πρότασης σε -en</strong>! π.χ. <em>Ik <strong>moet</strong> vandaag <strong>werken</strong></em> (Πρέπει σήμερα να δουλέψω).
    `,
    table: [
      { nl: "groot / klein", ph: "χρόοτ / κλάιν", el: "μεγάλος / μικρός", note: "Επίθετα" },
      { nl: "mooi / nieuw", ph: "μόοι / νίου", el: "όμορφος / καινούργιος", note: "Επίθετα" },
      { nl: "een grote auto (de-λέξη)", ph: "εν χρότε άουτο", el: "ένα μεγάλο αυτοκίνητο", note: "de-λέξη -> παίρνει -e" },
      { nl: "een groot huis (het-λέξη!)", ph: "εν χρόοτ χάους", el: "ένα μεγάλο σπίτι", note: "een + het-λέξη -> ΧΩΡΙΣ -e!" },
      { nl: "het grote huis", ph: "χετ χρότε χάους", el: "το μεγάλο σπίτι", note: "Με 'het' παίρνει κανονικά -e!" },
      { nl: "Ik moet ... werken", ph: "Ικ μουτ ... βέρκεν", el: "Εγώ πρέπει να δουλέψω", note: "moeten = πρέπει (ik/hij moet)" },
      { nl: "Ik kan ... spreken", ph: "Ικ καν ... σπρέκεν", el: "Εγώ μπορώ να μιλήσω", note: "kunnen = μπορώ (ik/hij kan)" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Το «auto» είναι de-λέξη (de auto). Πώς λέμε «ένα μεγάλο αυτοκίνητο»;",
        dutchAudio: "een grote auto",
        promptMain: "een ___ auto",
        promptSub: "Με de-λέξεις το επίθετο πριν το ουσιαστικό παίρνει πάντα -e!",
        options: ["grote", "groot", "groten", "grootte"],
        correctAnswer: "grote",
        explanation: "Επειδή είναι «de auto», λέμε πάντα: de grote auto ΚΑΙ een grote auto!"
      },
      {
        level: 2, type: "fill",
        label: "Το «huis» είναι het-λέξη (het huis). Πώς λέμε «ένα μεγάλο σπίτι»;",
        dutchAudio: "een groot huis",
        promptMain: "een ___ huis",
        promptSub: "ΠΡΟΣΟΧΗ στην εξαίρεση: «een» + «het-λέξη»!",
        options: ["groot", "grote", "groten", "groote"],
        correctAnswer: "groot",
        explanation: "ΕΞΑΙΡΕΣΗ: Όταν έχουμε «een» + ουδέτερη λέξη (het huis, het kind, het boek), το επίθετο ΔΕΝ παίρνει -e: een groot huis!"
      },
      {
        level: 3, type: "fill",
        label: "Και πώς λέμε «ΤΟ μεγάλο σπίτι» (με οριστικό άρθρο het);",
        dutchAudio: "het grote huis",
        promptMain: "het ___ huis",
        promptSub: "Με οριστικό άρθρο (de/het) παίρνει πάντα -e!",
        options: ["grote", "groot", "groten", "groote"],
        correctAnswer: "grote",
        explanation: "het grote huis (με -e), αλλά een groot huis (χωρίς -e)!"
      },
      {
        level: 4, type: "fill",
        label: "Το «boek» είναι het-λέξη (het boek). Πώς λέμε «ένα καινούργιο βιβλίο»;",
        dutchAudio: "een nieuw boek",
        promptMain: "een ___ boek",
        promptSub: "een + het-λέξη (boek)",
        options: ["nieuw", "nieuwe", "nieuwen", "nieuwt"],
        correctAnswer: "nieuw",
        explanation: "Επειδή είναι het boek και έχει «een» μπροστά, μένει χωρίς -e: een nieuw boek!"
      },
      {
        level: 5, type: "choice",
        label: "Πού πηγαίνει το δεύτερο ρήμα όταν έχουμε «moet» (πρέπει) ή «kan» (μπορώ);",
        dutchAudio: "Ik moet vandaag werken",
        promptMain: "Πρέπει να δουλέψω σήμερα.",
        promptSub: "Διάλεξε τη σωστή σειρά λέξεων",
        options: [
          "Ik moet vandaag werken.",
          "Ik moet werken vandaag.",
          "Ik werken moet vandaag.",
          "Ik moet werk vandaag."
        ],
        correctAnswer: "Ik moet vandaag werken.",
        explanation: "Το 2ο ρήμα πηγαίνει ΠΑΝΤΑ στο τέλος της πρότασης σε απαρέμφατο (-en): Ik moet vandaag werken!"
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Zij kan goed Nederlands spreken",
        promptMain: "Zij kan goed Nederlands spreken.",
        promptSub: "goed = καλά",
        options: [
          "Αυτή μπορεί να μιλήσει καλά Ολλανδικά.",
          "Αυτή πρέπει να μάθει Ολλανδικά.",
          "Εμείς μπορούμε να μιλήσουμε Ολλανδικά.",
          "Αυτή θέλει να μιλήσει Ολλανδικά."
        ],
        correctAnswer: "Αυτή μπορεί να μιλήσει καλά Ολλανδικά.",
        explanation: "Zij kan (Αυτή μπορεί) + goed Nederlands (καλά Ολλανδικά) + spreken (να μιλήσει - στο τέλος!)."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε το ρήμα στο τέλος της πρότασης",
        dutchAudio: "Wij willen een mooi huis kopen",
        promptMain: "Wij willen een mooi huis ___. (kopen = αγοράζω)",
        promptSub: "Σε τι μορφή μπαίνει το ρήμα στο τέλος;",
        options: ["kopen", "koop", "koopt", "gekocht"],
        correctAnswer: "kopen",
        explanation: "Στο τέλος μπαίνει πάντα ολόκληρο το ρήμα σε -en: kopen (να αγοράσουμε)!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik heb een nieuwe fiets",
        promptMain: "Εγώ έχω ένα καινούργιο ποδήλατο",
        promptSub: "Το ποδήλατο είναι «de fiets» (de-λέξη)!",
        wordBank: ["Ik", "heb", "een", "nieuwe", "fiets", "nieuw", "het"],
        acceptedAnswers: ["ik heb een nieuwe fiets"],
        displayCorrect: "Ik heb een nieuwe fiets",
        explanation: "Επειδή είναι «de fiets», παίρνει -e: een nieuwe fiets!"
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik moet Nederlands leren",
        promptMain: "Εγώ πρέπει να μάθω Ολλανδικά",
        promptSub: "Βάλε το «leren» στο τέλος!",
        wordBank: ["Ik", "moet", "Nederlands", "leren", "leer", "kan"],
        acceptedAnswers: ["ik moet nederlands leren"],
        displayCorrect: "Ik moet Nederlands leren",
        explanation: "Ik moet (πρέπει) + Nederlands + leren (να μάθω - στο τέλος!)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Επίθετα + Βοηθητικά Ρήματα!",
        dutchAudio: "Hij heeft een groot huis en een mooie auto",
        promptMain: "Αυτός έχει ένα μεγάλο σπίτι και ένα όμορφο αυτοκίνητο",
        promptSub: "Θυμήσου: het huis (ουδέτερο) vs de auto (κοινό γένος)!",
        wordBank: ["Hij", "heeft", "een", "groot", "huis", "en", "een", "mooie", "auto", "grote", "mooi"],
        acceptedAnswers: ["hij heeft een groot huis en een mooie auto"],
        displayCorrect: "Hij heeft een groot huis en een mooie auto",
        explanation: "ΚΟΡΥΦΑΙΟΣ! een groot huis (χωρίς -e λόγω het huis) + een mooie auto (με -e λόγω de auto)!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 12: ΠΑΡΑΚΕΙΜΕΝΟΣ (PERFECTUM - ΠΑΡΕΛΘΟΝ) & FINAL A2 BOSS!
  // ==========================================================================
  {
    week: 12,
    month: "Μήνας 3: Σύνταξη, Ερωτήσεις & Καθημερινότητα",
    title: "Εβδομάδα 12: Παρελθόν (Perfectum με ge-) & Τελικό Boss!",
    subtitle: "Πώς μιλάμε για το παρελθόν στα Ολλανδικά (Ik heb gewerkt / Ik ben gegaan)",
    color: "purple",
    icon: "🏆",
    rule: `
      <strong>Πώς φτιάχνουμε το Παρελθόν (Perfectum):</strong><br>
      Χρησιμοποιούμε το <strong>hebben</strong> (ή το <strong>zijn</strong> για κίνηση/αλλαγή κατάστασης) στη 2η θέση + τη <strong>Μετοχή με «ge-» στο ΤΕΛΟΣ της πρότασης</strong>!<br>
      • <em>werken -> Ik <strong>heb</strong> vandaag <strong>gewerkt</strong></em> (Δούλεψα σήμερα).<br>
      • <em>maken (φτιάχνω/κάνω) -> Hij <strong>heeft</strong> koffie <strong>gemaakt</strong></em> (Έφτιαξε καφέ).<br>
      • <em>wonen -> Wij <strong>hebben</strong> in Nederland <strong>gewoond</strong></em> (Μείναμε στην Ολλανδία).<br>
      • <em>gaan (κίνηση -> παίρνει zijn!) -> Ik <strong>ben</strong> naar Amsterdam <strong>gegaan</strong></em> (Πήγα στο Άμστερνταμ).
    `,
    table: [
      { nl: "Ik heb gewerkt", ph: "Ικ χεμπ χεβέρκτ", el: "Εγώ δούλεψα", note: "ge + ρίζα (werk) + t" },
      { nl: "Ik heb gewoond / geleerd", ph: "Ικ χεμπ χεβόοντ / χελέιρντ", el: "Εγώ έμεινα / έμαθα", note: "ge + ρίζα + d" },
      { nl: "Ik heb gemaakt / gekocht", ph: "Ικ χεμπ χεμάακτ / χεκόχτ", el: "Εγώ έφτιαξα / αγόρασα", note: "maken -> gemaakt, kopen -> gekocht" },
      { nl: "Ik heb gegeten / gedronken", ph: "Ικ χεμπ χεχέιτεν / χεντρόνκεν", el: "Εγώ έφαγα / ήπια", note: "eten -> gegeten, drinken -> gedronken" },
      { nl: "Ik ben gegaan / geweest", ph: "Ικ μπεν χεχάαν / χεβέιστ", el: "Εγώ πήγα / ήμουν (υπήρξα)", note: "Με το ρήμα zijn (κίνηση/κατάσταση)!" },
      { nl: "gisteren", ph: "χίστερεν", el: "χθες", note: "Χρονικό επίρρημα παρελθόντος" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Πώς λέμε «Εγώ δούλεψα χθες»;",
        dutchAudio: "Ik heb gisteren gewerkt",
        promptMain: "Ik heb gisteren ___.",
        promptSub: "Μετοχή του werken (ge- + werk + -t)",
        options: ["gewerkt", "werken", "werkt", "werk"],
        correctAnswer: "gewerkt",
        explanation: "Ik heb (έχω) + gisteren (χθες) + gewerkt (δουλέψει = δούλεψα)!"
      },
      {
        level: 2, type: "fill",
        label: "Ποιο βοηθητικό ρήμα παίρνει το «gegaan» (πήγα - κίνηση);",
        dutchAudio: "Ik ben naar Nederland gegaan",
        promptMain: "Ik ___ naar Nederland gegaan.",
        promptSub: "Τα ρήματα κίνησης παίρνουν hebben ή zijn;",
        options: ["ben", "heb", "is", "heeft"],
        correctAnswer: "ben",
        explanation: "Τα ρήματα κίνησης (όπως το gaan -> gegaan) παίρνουν ΠΑΝΤΑ το ρήμα «zijn»: Ik ben gegaan (Πήγα)!"
      },
      {
        level: 3, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Hij heeft een nieuw boek gekocht",
        promptMain: "Hij heeft een nieuw boek gekocht.",
        promptSub: "gekocht = αγόρασε (από το kopen)",
        options: [
          "Αυτός αγόρασε ένα καινούργιο βιβλίο.",
          "Αυτός αγοράζει ένα καινούργιο βιβλίο.",
          "Αυτός έφτιαξε ένα καινούργιο βιβλίο.",
          "Εγώ αγόρασα το καινούργιο βιβλίο."
        ],
        correctAnswer: "Αυτός αγόρασε ένα καινούργιο βιβλίο.",
        explanation: "Hij heeft ... gekocht = Αυτός αγόρασε + een nieuw boek (ένα καινούργιο βιβλίο)."
      },
      {
        level: 4, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Wij hebben brood gegeten en koffie gedronken",
        promptMain: "Wij hebben brood gegeten en koffie gedronken.",
        promptSub: "gegeten (από το eten) & gedronken (από το drinken)",
        options: [
          "Εμείς φάγαμε ψωμί και ήπιαμε καφέ.",
          "Εμείς τρώμε ψωμί και πίνουμε καφέ.",
          "Αυτοί έφτιαξαν ψωμί και καφέ.",
          "Εμείς θέλουμε να φάμε ψωμί."
        ],
        correctAnswer: "Εμείς φάγαμε ψωμί και ήπιαμε καφέ.",
        explanation: "Wij hebben gegeten (φάγαμε) en gedronken (και ήπιαμε)!"
      },
      {
        level: 5, type: "fill",
        label: "Συμπλήρωσε τη μετοχή: «Αυτή έμαθε Ολλανδικά»",
        dutchAudio: "Zij heeft Nederlands geleerd",
        promptMain: "Zij heeft Nederlands ___.",
        promptSub: "Από το ρήμα leren (μαθαίνω)",
        options: ["geleerd", "leren", "leert", "gewerkt"],
        correctAnswer: "geleerd",
        explanation: "leren -> geleerd! Zij heeft Nederlands geleerd."
      },
      {
        level: 6, type: "fill",
        label: "Κανόνας V2 στο παρελθόν: «Χθες δούλεψα»",
        dutchAudio: "Gisteren heb ik gewerkt",
        promptMain: "Gisteren ___ gewerkt.",
        promptSub: "Το βοηθητικό ρήμα (heb) πρέπει να είναι στη 2η θέση!",
        options: ["heb ik", "ik heb", "ben ik", "heeft ik"],
        correctAnswer: "heb ik",
        explanation: "Gisteren (1) + heb (2) + ik (3) + gewerkt (στο τέλος)!"
      },
      {
        level: 7, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik heb koffie gemaakt",
        promptMain: "Εγώ έφτιαξα καφέ",
        promptSub: "gemaakt = έφτιαξα",
        wordBank: ["Ik", "heb", "koffie", "gemaakt", "gewerkt", "ben"],
        acceptedAnswers: ["ik heb koffie gemaakt"],
        displayCorrect: "Ik heb koffie gemaakt",
        explanation: "Ik heb + koffie + gemaakt (στο τέλος)!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Wij hebben in Nederland gewoond",
        promptMain: "Εμείς μείναμε στην Ολλανδία",
        promptSub: "gewoond μπαίνει στο τέλος της πρότασης!",
        wordBank: ["Wij", "hebben", "in", "Nederland", "gewoond", "wonen"],
        acceptedAnswers: ["wij hebben in nederland gewoond", "we hebben in nederland gewoond"],
        displayCorrect: "Wij hebben in Nederland gewoond",
        explanation: "Wij hebben + in Nederland + gewoond (στο τέλος)!"
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Hij is naar Griekenland gegaan",
        promptMain: "Αυτός πήγε στην Ελλάδα",
        promptSub: "ΠΡΟΣΟΧΗ: Το gegaan παίρνει «is» (από το zijn) και μπαίνει στο τέλος!",
        wordBank: ["Hij", "is", "naar", "Griekenland", "gegaan", "heeft"],
        acceptedAnswers: ["hij is naar griekenland gegaan"],
        displayCorrect: "Hij is naar Griekenland gegaan",
        explanation: "Hij is (όχι heeft!) + naar Griekenland + gegaan!"
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 ΤΕΛΙΚΟ BOSS ΟΛΟΥ ΤΟΥ ΠΡΟΓΡΑΜΜΑΤΟΣ (+50 XP)!",
        dutchAudio: "Gisteren heb ik gewerkt en vandaag leer ik Nederlands",
        promptMain: "Χθες δούλεψα εγώ και σήμερα μαθαίνω εγώ Ολλανδικά",
        promptSub: "Συνδύασε Παρελθόν + Ενεστώτα + Κανόνα V2!",
        wordBank: ["Gisteren", "heb", "ik", "gewerkt", "en", "vandaag", "leer", "ik", "Nederlands"],
        acceptedAnswers: ["gisteren heb ik gewerkt en vandaag leer ik nederlands"],
        displayCorrect: "Gisteren heb ik gewerkt en vandaag leer ik Nederlands",
        explanation: "🏆 ΣΥΓΧΑΡΗΤΗΡΙΑ! Τερμάτισες και τις 12 Εβδομάδες! Έχεις πλέον γερές βάσεις από το A1 προς το A2 στα Ολλανδικά!"
      }
    ]
  }
];

// Ενώνουμε τα δύο μέρη σε έναν ενιαίο πίνακα 12 Εβδομάδων
window.FULL_CURRICULUM = [...CURRICULUM_PART_1, ...CURRICULUM_PART_2];
