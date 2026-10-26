// ============================================================================
// DUTCHLINGO CURRICULUM: W1 - W6 (Μήνες 1-3: Θεμέλια Γραμματικής & Καθημερινότητα)
// Κάθε Εβδομάδα περιλαμβάνει: Θεωρία, Πίνακα Γραμματικής/Λεξιλογίου & 10 Πίστες
// ============================================================================

const CURRICULUM_PART_1 = [
  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 1: ΠΡΟΣΩΠΙΚΕΣ ΑΝΤΩΝΥΜΙΕΣ
  // ==========================================================================
  {
    week: 1,
    month: "Μήνας 1: Τα Θεμέλια της Γραμματικής",
    title: "Εβδομάδα 1: Προσωπικές Αντωνυμίες (Ik, Jij, Hij...)",
    subtitle: "Τα πρόσωπα στα Ολλανδικά (Εγώ, εσύ, αυτός, εμείς...) & η λέξη «en» (και)",
    color: "blue",
    icon: "👤",
    rule: `
      <strong>Κανόνας #1 (Ποτέ χωρίς πρόσωπο!):</strong> Στα Ελληνικά λέμε απλά «είμαι» ή «έχω». Στα Ολλανδικά όμως <strong>απαγορεύεται</strong> να παραλείψουμε το πρόσωπο! Πρέπει πάντα να βάζουμε την αντωνυμία μπροστά.<br><br>
      <strong>Κανόνας #2 (Τονισμένος vs Άτονος τύπος):</strong> Πολλές αντωνυμίες έχουν 2 μορφές: π.χ. <strong>jij / je</strong> (εσύ), <strong>zij / ze</strong> (αυτή/αυτοί), <strong>wij / we</strong> (εμείς). Χρησιμοποιούμε τον πρώτο τύπο όταν θέλουμε να δώσουμε έμφαση στο πρόσωπο!<br><br>
      <strong>Προσοχή στο «zij»:</strong> Σημαίνει ΚΑΙ «αυτή» (ενικός) ΚΑΙ «αυτοί/αυτές» (πληθυντικός). Το ξεχωρίζουμε από το ρήμα που ακολουθεί!
    `,
    table: [
      { nl: "ik", ph: "ικ", el: "εγώ", note: "Γράφεται με μικρό 'i' εκτός αν είναι στην αρχή πρότασης" },
      { nl: "jij / je", ph: "γιάι / γιε", el: "εσύ", note: "jij = με έμφαση, je = καθημερινό" },
      { nl: "u", ph: "ου", el: "εσείς (ευγενείας)", note: "Για αγνώστους, ηλικιωμένους ή επίσημα" },
      { nl: "hij", ph: "χάι", el: "αυτός", note: "Το h ακούγεται σαν ελαφρύ χ" },
      { nl: "zij / ze", ph: "ζάι / ζε", el: "αυτή", note: "3ο ενικό θηλυκό" },
      { nl: "het", ph: "χετ", el: "αυτό", note: "3ο ενικό ουδέτερο" },
      { nl: "wij / we", ph: "βάι / βε", el: "εμείς", note: "1ο πληθυντικό" },
      { nl: "jullie", ph: "γιούλι", el: "εσείς (παρέα)", note: "2ο πληθυντικό (σε πολλούς)" },
      { nl: "zij / ze", ph: "ζάι / ζε", el: "αυτοί / αυτές / αυτά", note: "3ο πληθυντικό" },
      { nl: "en", ph: "εν", el: "και", note: "Σύνδεσμος (π.χ. ik en jij)" }
    ],
    questions: [
      {
        level: 1, type: "choice",
        label: "Τι σημαίνει αυτή η αντωνυμία;",
        dutchAudio: "ik",
        promptMain: "ik",
        promptSub: "Διάλεξε τη σωστή ελληνική σημασία",
        options: ["εγώ", "εσύ", "αυτός", "εμείς"],
        correctAnswer: "εγώ",
        explanation: "«ik» (ικ) σημαίνει «εγώ»."
      },
      {
        level: 2, type: "choice",
        label: "Πώς λέμε «εσύ» (με έμφαση) στα Ολλανδικά;",
        dutchAudio: "jij",
        promptMain: "εσύ",
        promptSub: "Διάλεξε τη σωστή ολλανδική λέξη",
        options: ["jij", "hij", "wij", "u"],
        correctAnswer: "jij",
        explanation: "«jij» (γιάι) ή «je» (γιε) σημαίνει «εσύ»."
      },
      {
        level: 3, type: "choice",
        label: "Τι σημαίνει η αντωνυμία «hij»;",
        dutchAudio: "hij",
        promptMain: "hij",
        promptSub: "Διάλεξε τη σωστή απάντηση",
        options: ["αυτός", "αυτή", "εμείς", "εσείς"],
        correctAnswer: "αυτός",
        explanation: "«hij» (χάι) = αυτός."
      },
      {
        level: 4, type: "choice",
        label: "Ποια αντωνυμία σημαίνει ΚΑΙ «αυτή» ΚΑΙ «αυτοί/αυτές»;",
        dutchAudio: "zij",
        promptMain: "αυτή / αυτοί",
        promptSub: "Διάλεξε τη σωστή ολλανδική αντωνυμία",
        options: ["zij", "hij", "jullie", "wij"],
        correctAnswer: "zij",
        explanation: "Το «zij» (ή «ze») σημαίνει και «αυτή» και «αυτοί/αυτές»!"
      },
      {
        level: 5, type: "choice",
        label: "Τι σημαίνει το «wij» (ή «we»);",
        dutchAudio: "wij",
        promptMain: "wij",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: ["εμείς", "εσείς", "αυτοί", "εγώ"],
        correctAnswer: "εμείς",
        explanation: "«wij» (βάι) ή «we» (βε) = εμείς."
      },
      {
        level: 6, type: "fill",
        label: "Πώς απευθυνόμαστε σε μια παρέα φίλων («εσείς»);",
        dutchAudio: "jullie",
        promptMain: "___ (εσείς - πληθυντικός)",
        promptSub: "Διάλεξε τη σωστή αντωνυμία",
        options: ["jullie", "u", "jij", "wij"],
        correctAnswer: "jullie",
        explanation: "«jullie» (γιούλι) χρησιμοποιείται όταν μιλάμε σε 2 ή περισσότερα άτομα."
      },
      {
        level: 7, type: "fill",
        label: "Πώς μιλάμε επίσημα (πληθυντικός ευγενείας) σε έναν άγνωστο;",
        dutchAudio: "u",
        promptMain: "___ (Εσείς - ευγενείας)",
        promptSub: "Διάλεξε τη σωστή λέξη",
        options: ["u", "jullie", "het", "ik"],
        correctAnswer: "u",
        explanation: "Το «u» (προφέρεται «ου») είναι ο επίσημος τύπος ευγενείας."
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "ik en jij",
        promptMain: "εγώ και εσύ",
        promptSub: "Σύνθεσε τη φράση με τις λέξεις από κάτω",
        wordBank: ["ik", "en", "jij", "hij", "wij"],
        acceptedAnswers: ["ik en jij", "ik en je"],
        displayCorrect: "ik en jij",
        explanation: "ik (εγώ) + en (και) + jij (εσύ)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "hij en zij",
        promptMain: "αυτός και αυτή",
        promptSub: "Σύνθεσε τη φράση",
        wordBank: ["hij", "en", "zij", "jullie", "ik"],
        acceptedAnswers: ["hij en zij", "hij en ze"],
        displayCorrect: "hij en zij",
        explanation: "hij (αυτός) + en (και) + zij (αυτή)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Μετάφρασε στα Ολλανδικά",
        dutchAudio: "wij en jullie",
        promptMain: "εμείς και εσείς (παρέα)",
        promptSub: "Τελική δοκιμασία Εβδομάδας 1!",
        wordBank: ["wij", "en", "jullie", "zij", "hij", "u"],
        acceptedAnswers: ["wij en jullie", "we en jullie"],
        displayCorrect: "wij en jullie",
        explanation: "Τέλεια! wij (εμείς) + en (και) + jullie (εσείς)!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 2: ΤΟ ΡΗΜΑ ZIJN (ΕΙΜΑΙ)
  // ==========================================================================
  {
    week: 2,
    month: "Μήνας 1: Τα Θεμέλια της Γραμματικής",
    title: "Εβδομάδα 2: Το Ρήμα «zijn» (Είμαι)",
    subtitle: "Κλίση σε όλα τα πρόσωπα (ben, bent, is, zijn) & πρώτοι επιθετικοί προσδιορισμοί",
    color: "green",
    icon: "⚡",
    rule: `
      <strong>Κανόνας (Κλίση του «zijn» = είμαι):</strong><br>
      • Στον ενικό έχει 3 μορφές: <strong>ik ben</strong> (είμαι), <strong>jij/u bent</strong> (είσαι), <strong>hij/zij/het is</strong> (είναι).<br>
      • Στον πληθυντικό (<strong>wij, jullie, zij</strong>) είναι ΠΑΝΤΑ <strong>zijn</strong>!<br><br>
      <strong>Tip:</strong> Έτσι ξεχωρίζουμε το <strong>zij is</strong> (αυτή είναι) από το <strong>zij zijn</strong> (αυτοί/αυτές είναι)!
    `,
    table: [
      { nl: "ik ben", ph: "ικ μπεν", el: "εγώ είμαι", note: "1ο ενικό" },
      { nl: "jij / u bent", ph: "γιάι / ου μπεντ", el: "εσύ είσαι / εσείς είστε (ευγεν.)", note: "Παίρνει -t" },
      { nl: "hij / zij / het is", ph: "χάι / ζάι / χετ ιζ", el: "αυτός / αυτή / αυτό είναι", note: "Ίδιο με το αγγλικό is!" },
      { nl: "wij zijn", ph: "βάι ζάιν", el: "εμείς είμαστε", note: "Πληθυντικός -> πάντα zijn" },
      { nl: "jullie zijn", ph: "γιούλι ζάιν", el: "εσείς είστε", note: "Πληθυντικός -> πάντα zijn" },
      { nl: "zij zijn", ph: "ζάι ζάιν", el: "αυτοί / αυτές είναι", note: "Πληθυντικός -> πάντα zijn" },
      { nl: "hier / daar", ph: "χιρ / ντάαρ", el: "εδώ / εκεί", note: "Τοπικά επιρρήματα" },
      { nl: "blij / moe", ph: "μπλάι / μου", el: "χαρούμενος / κουρασμένος", note: "Επίθετα" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο του «zijn»",
        dutchAudio: "Ik ben",
        promptMain: "Ik ___",
        promptSub: "Ποιο ρήμα πηγαίνει με το «Ik»;",
        options: ["ben", "bent", "is", "zijn"],
        correctAnswer: "ben",
        explanation: "Ik ben = Εγώ είμαι."
      },
      {
        level: 2, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Jij»",
        dutchAudio: "Jij bent",
        promptMain: "Jij ___",
        promptSub: "Ποιο ρήμα πηγαίνει με το «Jij»;",
        options: ["bent", "ben", "is", "zijn"],
        correctAnswer: "bent",
        explanation: "Jij bent = Εσύ είσαι (παίρνει -t!)."
      },
      {
        level: 3, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Hij / Zij» (ενικός)",
        dutchAudio: "Hij is",
        promptMain: "Hij ___",
        promptSub: "3ο ενικό πρόσωπο",
        options: ["is", "bent", "ben", "zijn"],
        correctAnswer: "is",
        explanation: "Hij is = Αυτός είναι / Zij is = Αυτή είναι."
      },
      {
        level: 4, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Wij / Jullie»",
        dutchAudio: "Wij zijn",
        promptMain: "Wij ___",
        promptSub: "Πληθυντικός αριθμός",
        options: ["zijn", "is", "bent", "ben"],
        correctAnswer: "zijn",
        explanation: "Στον πληθυντικό (wij, jullie, zij) βάζουμε πάντα «zijn»!"
      },
      {
        level: 5, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Ik ben hier",
        promptMain: "Ik ben hier.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: ["Εγώ είμαι εδώ.", "Εγώ είμαι εκεί.", "Εσύ είσαι εδώ.", "Εμείς είμαστε εδώ."],
        correctAnswer: "Εγώ είμαι εδώ.",
        explanation: "Ik ben (Εγώ είμαι) + hier (εδώ)."
      },
      {
        level: 6, type: "choice",
        label: "Πρόσεξε το ρήμα και βρες τη σωστή μετάφραση!",
        dutchAudio: "Zij zijn blij",
        promptMain: "Zij zijn blij.",
        promptSub: "Κοίτα αν το ρήμα είναι «is» ή «zijn»!",
        options: ["Αυτοί είναι χαρούμενοι.", "Αυτή είναι χαρούμενη.", "Αυτοί είναι κουρασμένοι.", "Εμείς είμαστε χαρούμενοι."],
        correctAnswer: "Αυτοί είναι χαρούμενοι.",
        explanation: "Επειδή έχει «zijn» (πληθυντικός), το «Zij» σημαίνει «Αυτοί/Αυτές»! Αν έλεγε «Zij is blij» θα σήμαινε «Αυτή είναι χαρούμενη»."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε το κενό",
        dutchAudio: "Jullie zijn daar",
        promptMain: "Jullie ___ daar.",
        promptSub: "Διάλεξε τον σωστό τύπο του ρήματος",
        options: ["zijn", "bent", "is", "ben"],
        correctAnswer: "zijn",
        explanation: "Jullie zijn daar = Εσείς είστε εκεί."
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Jij bent moe",
        promptMain: "Εσύ είσαι κουρασμένος",
        promptSub: "Φτιάξε την πρόταση",
        wordBank: ["Jij", "bent", "moe", "blij", "is", "ben"],
        acceptedAnswers: ["jij bent moe", "je bent moe"],
        displayCorrect: "Jij bent moe",
        explanation: "Jij (Εσύ) + bent (είσαι) + moe (κουρασμένος)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Zij is hier",
        promptMain: "Αυτή είναι εδώ",
        promptSub: "Προσοχή: Ενικός αριθμός («Αυτή»)",
        wordBank: ["Zij", "is", "hier", "zijn", "daar", "bent"],
        acceptedAnswers: ["zij is hier", "ze is hier"],
        displayCorrect: "Zij is hier",
        explanation: "Zij (Αυτή) + is (είναι) + hier (εδώ)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik ben moe en jij bent blij",
        promptMain: "Εγώ είμαι κουρασμένος και εσύ είσαι χαρούμενος",
        promptSub: "Τελική δοκιμασία Εβδομάδας 2!",
        wordBank: ["Ik", "ben", "moe", "en", "jij", "bent", "blij", "is"],
        acceptedAnswers: ["ik ben moe en jij bent blij", "ik ben moe en je bent blij"],
        displayCorrect: "Ik ben moe en jij bent blij",
        explanation: "Άψογα! Ik ben moe (Εγώ είμαι κουρασμένος) en jij bent blij (και εσύ είσαι χαρούμενος)!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 3: ΤΟ ΡΗΜΑ HEBBEN (ΕΧΩ)
  // ==========================================================================
  {
    week: 3,
    month: "Μήνας 1: Τα Θεμέλια της Γραμματικής",
    title: "Εβδομάδα 3: Το Ρήμα «hebben» (Έχω)",
    subtitle: "Κλίση του ρήματος «έχω» (heb, hebt, heeft, hebben) & καθημερινές εκφράσεις",
    color: "orange",
    icon: "🎒",
    rule: `
      <strong>Κανόνας (Κλίση του «hebben» = έχω):</strong><br>
      • <strong>ik heb</strong> (εγώ έχω)<br>
      • <strong>jij / u hebt</strong> (εσύ έχεις - παίρνει -t)<br>
      • <strong>hij / zij / het heeft</strong> (αυτός/αυτή έχει - προσοχή, γίνεται <strong>heeft</strong>!)<br>
      • <strong>wij / jullie / zij hebben</strong> (στον πληθυντικό μένει πάντα <strong>hebben</strong>!).<br><br>
      <strong>Ιδιωματισμός:</strong> Στα Ολλανδικά λέμε <em>Ik heb honger</em> (Έχω πείνα = Πεινάω) και <em>Ik heb dorst</em> (Έχω δίψα = Διψάω)!
    `,
    table: [
      { nl: "ik heb", ph: "ικ χεμπ", el: "εγώ έχω", note: "1ο ενικό" },
      { nl: "jij / u hebt", ph: "γιάι / ου χεμπτ", el: "εσύ έχεις / εσείς έχετε", note: "2ο ενικό (+t)" },
      { nl: "hij / zij heeft", ph: "χάι / ζάι χέιφτ", el: "αυτός / αυτή έχει", note: "3ο ενικό (ανώμαλος τύπος heeft)" },
      { nl: "wij / jullie / zij hebben", ph: "χέμπεν", el: "εμείς έχουμε / εσείς έχετε / αυτοί έχουν", note: "Πληθυντικός -> πάντα hebben" },
      { nl: "honger / dorst", ph: "χόνγκερ / ντορστ", el: "πείνα / δίψα", note: "heb honger = πεινάω, heb dorst = διψάω" },
      { nl: "tijd / werk", ph: "τάιτ / βερκ", el: "χρόνος / δουλειά", note: "ουσ. χωρίς άρθρο σε γενική έννοια" },
      { nl: "koffie / water", ph: "κόφι / βάτερ", el: "καφές / νερό", note: "βασικά ουσιαστικά" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο του «hebben»",
        dutchAudio: "Ik heb",
        promptMain: "Ik ___",
        promptSub: "1ο ενικό πρόσωπο",
        options: ["heb", "hebt", "heeft", "hebben"],
        correctAnswer: "heb",
        explanation: "Ik heb = Εγώ έχω."
      },
      {
        level: 2, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Jij»",
        dutchAudio: "Jij hebt",
        promptMain: "Jij ___",
        promptSub: "2ο ενικό πρόσωπο",
        options: ["hebt", "heb", "heeft", "hebben"],
        correctAnswer: "hebt",
        explanation: "Jij hebt = Εσύ έχεις (παίρνει -t)."
      },
      {
        level: 3, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Hij / Zij»",
        dutchAudio: "Hij heeft",
        promptMain: "Hij / Zij ___",
        promptSub: "3ο ενικό πρόσωπο",
        options: ["heeft", "hebt", "heb", "hebben"],
        correctAnswer: "heeft",
        explanation: "Στο 3ο ενικό (hij, zij, het) γίνεται πάντα «heeft»!"
      },
      {
        level: 4, type: "fill",
        label: "Συμπλήρωσε τον σωστό τύπο για το «Wij / Jullie / Zij»",
        dutchAudio: "Wij hebben",
        promptMain: "Wij ___",
        promptSub: "Πληθυντικός αριθμός",
        options: ["hebben", "heeft", "hebt", "heb"],
        correctAnswer: "hebben",
        explanation: "Στον πληθυντικό βάζουμε πάντα «hebben»."
      },
      {
        level: 5, type: "choice",
        label: "Τι σημαίνει η πρόταση;",
        dutchAudio: "Ik heb honger en dorst",
        promptMain: "Ik heb honger en dorst.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: ["Πεινάω και διψάω.", "Έχω χρόνο και δουλειά.", "Έχω καφέ και νερό.", "Είμαι χαρούμενος και κουρασμένος."],
        correctAnswer: "Πεινάω και διψάω.",
        explanation: "honger = πείνα, dorst = δίψα -> Ik heb honger en dorst = Πεινάω και διψάω!"
      },
      {
        level: 6, type: "choice",
        label: "Τι σημαίνει η πρόταση;",
        dutchAudio: "Zij heeft werk",
        promptMain: "Zij heeft werk.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: ["Αυτή έχει δουλειά.", "Αυτοί έχουν δουλειά.", "Αυτή έχει χρόνο.", "Εσύ έχεις δουλειά."],
        correctAnswer: "Αυτή έχει δουλειά.",
        explanation: "Zij heeft (Αυτή έχει - ενικός λόγω του heeft) + werk (δουλειά)."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε το κενό",
        dutchAudio: "Jullie hebben tijd",
        promptMain: "Jullie ___ tijd.",
        promptSub: "Διάλεξε τον σωστό τύπο του ρήματος",
        options: ["hebben", "heeft", "hebt", "heb"],
        correctAnswer: "hebben",
        explanation: "Jullie hebben tijd = Εσείς έχετε χρόνο."
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik heb water en koffie",
        promptMain: "Εγώ έχω νερό και καφέ",
        promptSub: "Φτιάξε την πρόταση",
        wordBank: ["Ik", "heb", "water", "en", "koffie", "heeft"],
        acceptedAnswers: ["ik heb water en koffie"],
        displayCorrect: "Ik heb water en koffie",
        explanation: "Ik heb (Εγώ έχω) water en koffie (νερό και καφέ)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Hij heeft tijd",
        promptMain: "Αυτός έχει χρόνο",
        promptSub: "Πρόσεξε το ρήμα στο 3ο ενικό!",
        wordBank: ["Hij", "heeft", "tijd", "heb", "werk", "hebt"],
        acceptedAnswers: ["hij heeft tijd"],
        displayCorrect: "Hij heeft tijd",
        explanation: "Hij (Αυτός) + heeft (έχει) + tijd (χρόνο)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Συνδύασε «hebben» & «zijn»!",
        dutchAudio: "Wij hebben werk en wij zijn moe",
        promptMain: "Εμείς έχουμε δουλειά και εμείς είμαστε κουρασμένοι",
        promptSub: "Τελική δοκιμασία Εβδομάδας 3!",
        wordBank: ["Wij", "hebben", "werk", "en", "wij", "zijn", "moe", "heeft"],
        acceptedAnswers: ["wij hebben werk en wij zijn moe", "we hebben werk en we zijn moe"],
        displayCorrect: "Wij hebben werk en wij zijn moe",
        explanation: "Συγχαρητήρια! Wij hebben werk (Εμείς έχουμε δουλειά) en wij zijn moe (και εμείς είμαστε κουρασμένοι)!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 4: ΤΑ ΑΡΘΡΑ DE, HET & EEN
  // ==========================================================================
  {
    week: 4,
    month: "Μήνας 1: Τα Θεμέλια της Γραμματικής",
    title: "Εβδομάδα 4: Τα Άρθρα «de», «het» & «een»",
    subtitle: "Κοινό γένος (de), ουδέτερο γένος (het), αόριστο άρθρο (een) & πληθυντικός",
    color: "purple",
    icon: "📚",
    rule: `
      <strong>Κανόνας #1 (Αόριστο άρθρο):</strong> Το <strong>een</strong> (προφέρεται <em>εν</em>) σημαίνει «ένας / μία / ένα» και μπαίνει μπροστά από ΟΛΑ τα ουσιαστικά ενικού (π.χ. <em>een man, een huis</em>).<br><br>
      <strong>Κανόνας #2 (Οριστικά άρθρα de & het):</strong><br>
      • <strong>de</strong> (ο/η/το): Για ~70% των λέξεων. <strong>ΠΑΝΤΑ «de»</strong> παίρνουν οι άνθρωποι/επαγγέλματα (<em>de man, de vrouw</em>) και <strong>ΟΛΑ τα ουσιαστικά στον πληθυντικό</strong>!<br>
      • <strong>het</strong> (το): Ουδέτερο (~30% των λέξεων στον ενικό, π.χ. <em>het huis, het kind, het boek, het water</em>).
    `,
    table: [
      { nl: "een", ph: "εν", el: "ένας / μία / ένα", note: "Αόριστο άρθρο (μόνο στον ενικό)" },
      { nl: "de man / de vrouw", ph: "ντε μαν / ντε φράου", el: "ο άντρας / η γυναίκα", note: "Πρόσωπα -> πάντα de" },
      { nl: "de auto / de fiets", ph: "ντε άουτο / ντε φιτς", el: "το αυτοκίνητο / το ποδήλατο", note: "Λέξεις με de" },
      { nl: "het huis", ph: "χετ χάους", el: "το σπίτι", note: "Λέξη με het (ουδέτερο)" },
      { nl: "het kind", ph: "χετ κιντ", el: "το παιδί", note: "Λέξη με het (ουδέτερο)" },
      { nl: "het boek", ph: "χετ μπουκ", el: "το βιβλίο", note: "Λέξη με het (ουδέτερο)" },
      { nl: "de boeken / de huizen", ph: "ντε μπούκεν / ντε χάουζεν", el: "τα βιβλία / τα σπίτια", note: "Πληθυντικός -> ΠΑΝΤΑ de!" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Ποιο άρθρο μπαίνει για ανθρώπους/πρόσωπα;",
        dutchAudio: "de man en de vrouw",
        promptMain: "___ man / ___ vrouw",
        promptSub: "Διάλεξε το σωστό οριστικό άρθρο",
        options: ["de", "het", "een", "en"],
        correctAnswer: "de",
        explanation: "Τα πρόσωπα (man, vrouw) παίρνουν πάντα «de»!"
      },
      {
        level: 2, type: "fill",
        label: "Ποιο είναι το οριστικό άρθρο για το «σπίτι» (huis);",
        dutchAudio: "het huis",
        promptMain: "___ huis",
        promptSub: "de ή het;",
        options: ["het", "de", "hij", "zij"],
        correctAnswer: "het",
        explanation: "Το σπίτι είναι ουδέτερο: «het huis»."
      },
      {
        level: 3, type: "fill",
        label: "Ποιο είναι το οριστικό άρθρο για το «παιδί» (kind) και το «βιβλίο» (boek);",
        dutchAudio: "het kind en het boek",
        promptMain: "___ kind / ___ boek",
        promptSub: "de ή het;",
        options: ["het", "de", "wij", "u"],
        correctAnswer: "het",
        explanation: "Και τα δύο είναι ουδέτερα: het kind, het boek."
      },
      {
        level: 4, type: "fill",
        label: "Τι άρθρο παίρνουν ΟΛΑ τα ουσιαστικά στον πληθυντικό (ακόμα κι αν στον ενικό είχαν het);",
        dutchAudio: "de boeken en de huizen",
        promptMain: "___ boeken / ___ huizen",
        promptSub: "Θυμήσου τον χρυσό κανόνα του πληθυντικού!",
        options: ["de", "het", "een", "zijn"],
        correctAnswer: "de",
        explanation: "Στον πληθυντικό ΟΛΑ τα ουσιαστικά παίρνουν «de»! (het boek -> de boeken)."
      },
      {
        level: 5, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "De vrouw heeft een fiets",
        promptMain: "De vrouw heeft een fiets.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: [
          "Η γυναίκα έχει ένα ποδήλατο.",
          "Μια γυναίκα έχει το ποδήλατο.",
          "Ο άντρας έχει ένα αυτοκίνητο.",
          "Η γυναίκα έχει ένα βιβλίο."
        ],
        correctAnswer: "Η γυναίκα έχει ένα ποδήλατο.",
        explanation: "De vrouw (Η γυναίκα) + heeft (έχει) + een fiets (ένα ποδήλατο)."
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Het kind heeft het boek",
        promptMain: "Het kind heeft het boek.",
        promptSub: "Προσοχή στα οριστικά άρθρα!",
        options: [
          "Το παιδί έχει το βιβλίο.",
          "Ένα παιδί έχει ένα βιβλίο.",
          "Το παιδί είναι στο σπίτι.",
          "Τα παιδιά έχουν τα βιβλία."
        ],
        correctAnswer: "Το παιδί έχει το βιβλίο.",
        explanation: "Het kind (Το παιδί) + heeft (έχει) + het boek (το βιβλίο)."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε το σωστό ρήμα",
        dutchAudio: "De man is hier",
        promptMain: "De man ___ hier.",
        promptSub: "Ο άντρας (= αυτός) είναι εδώ",
        options: ["is", "ben", "bent", "zijn"],
        correctAnswer: "is",
        explanation: "De man = hij (αυτός), άρα παίρνει «is»!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik heb een auto en een fiets",
        promptMain: "Εγώ έχω ένα αυτοκίνητο και ένα ποδήλατο",
        promptSub: "Χρησιμοποίησε το αόριστο άρθρο",
        wordBank: ["Ik", "heb", "een", "auto", "en", "een", "fiets", "de", "het"],
        acceptedAnswers: ["ik heb een auto en een fiets"],
        displayCorrect: "Ik heb een auto en een fiets",
        explanation: "Στο αόριστο («ένα») βάζουμε πάντα «een»!"
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Jij hebt het huis",
        promptMain: "Εσύ έχεις το σπίτι",
        promptSub: "Προσοχή: «το σπίτι» (οριστικό άρθρο)",
        wordBank: ["Jij", "hebt", "het", "huis", "de", "een"],
        acceptedAnswers: ["jij hebt het huis", "je hebt het huis"],
        displayCorrect: "Jij hebt het huis",
        explanation: "Jij hebt (Εσύ έχεις) + het huis (το σπίτι)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Μετάφρασε στα Ολλανδικά",
        dutchAudio: "De man en de vrouw hebben het boek",
        promptMain: "Ο άντρας και η γυναίκα έχουν το βιβλίο",
        promptSub: "Τελική δοκιμασία Μήνα 1!",
        wordBank: ["De", "man", "en", "de", "vrouw", "hebben", "het", "boek", "heeft"],
        acceptedAnswers: ["de man en de vrouw hebben het boek"],
        displayCorrect: "De man en de vrouw hebben het boek",
        explanation: "Μπράβο! Ολοκλήρωσες τον 1ο Μήνα! De man en de vrouw (πληθυντικός -> hebben) het boek!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 5: ΟΜΑΛΑ ΡΗΜΑΤΑ ΣΤΟΝ ΕΝΕΣΤΩΤΑ (STEM + T)
  // ==========================================================================
  {
    week: 5,
    month: "Μήνας 2: Ομαλά Ρήματα & Επικοινωνία",
    title: "Εβδομάδα 5: Ενεστώτας Ομαλών Ρημάτων (wonen, werken, spreken)",
    subtitle: "Πώς κλίνονται όλα τα κανονικά ρήματα στα Ολλανδικά (Κανόνας Ρίζα + t)",
    color: "blue",
    icon: "⚙️",
    rule: `
      <strong>Ο Χρυσός Κανόνας του Ενεστώτα:</strong><br>
      1. <strong>Ik (Εγώ):</strong> Παίρνει μόνο τη <strong>Ρίζα (Stem)</strong> του ρήματος (χωρίς το -en): π.χ. <em>werken -> ik werk</em> (δουλεύω), <em>wonen -> ik woon</em> (μένω/κατοικώ).<br>
      2. <strong>Jij / U / Hij / Zij (Εσύ / Αυτός / Αυτή):</strong> Παίρνει <strong>Ρίζα + t</strong>! π.χ. <em>jij werkt, hij woont, zij spreekt</em>.<br>
      3. <strong>Πληθυντικός (Wij / Jullie / Zij):</strong> Παίρνει ΠΑΝΤΑ ολόκληρο το ρήμα με <strong>-en</strong>! π.χ. <em>wij werken, jullie wonen, zij spreken</em>.
    `,
    table: [
      { nl: "wonen -> ik woon", ph: "βόνεν -> ικ βόον", el: "μένω (κατοικώ) -> εγώ μένω", note: "jij/hij woont | wij wonen" },
      { nl: "werken -> ik werk", ph: "βέρκεν -> ικ βερκ", el: "δουλεύω -> εγώ δουλεύω", note: "jij/hij werkt | wij werken" },
      { nl: "spreken -> ik spreek", ph: "σπρέκεν -> ικ σπρέικ", el: "μιλάω -> εγώ μιλάω", note: "jij/hij spreekt | wij spreken" },
      { nl: "leren -> ik leer", ph: "λέρεν -> ικ λέιρ", el: "μαθαίνω -> εγώ μαθαίνω", note: "jij/hij leert | wij leren" },
      { nl: "in Nederland / in Griekenland", ph: "ιν Νέιντερλαντ / ιν Χρίκενλαντ", el: "στην Ολλανδία / στην Ελλάδα", note: "in = σε / μέσα σε" },
      { nl: "Nederlands / Grieks / Engels", ph: "Νέιντερλαντς / Χρικς / Ένγκελς", el: "Ολλανδικά / Ελληνικά / Αγγλικά", note: "Γλώσσες" }
    ],
    questions: [
      {
        level: 1, type: "fill",
        label: "Κλίνε το ρήμα «werken» (δουλεύω) για το «Ik»",
        dutchAudio: "Ik werk",
        promptMain: "Ik ___ (δουλεύω)",
        promptSub: "Θυμήσου: Το «Ik» παίρνει σκέτη τη ρίζα χωρίς -t και χωρίς -en!",
        options: ["werk", "werkt", "werken", "werke"],
        correctAnswer: "werk",
        explanation: "Ik werk = Εγώ δουλεύω (σκέτη η ρίζα)."
      },
      {
        level: 2, type: "fill",
        label: "Κλίνε το ρήμα «wonen» (μένω) για το «Hij»",
        dutchAudio: "Hij woont in Nederland",
        promptMain: "Hij ___ in Nederland.",
        promptSub: "Τι κατάληξη παίρνει το 2ο και 3ο ενικό (jij, hij, zij);",
        options: ["woont", "woon", "wonen", "woonen"],
        correctAnswer: "woont",
        explanation: "Στο jij/hij/zij βάζουμε πάντα Ρίζα + t -> Hij woont!"
      },
      {
        level: 3, type: "fill",
        label: "Κλίνε το ρήμα «spreken» (μιλάω) για το «Jij»",
        dutchAudio: "Jij spreekt Engels",
        promptMain: "Jij ___ Engels.",
        promptSub: "Διάλεξε τον σωστό τύπο",
        options: ["spreekt", "spreek", "spreken", "spreeken"],
        correctAnswer: "spreekt",
        explanation: "Jij spreekt = Εσύ μιλάς (Ρίζα spreek + t)."
      },
      {
        level: 4, type: "fill",
        label: "Κλίνε το ρήμα «leren» (μαθαίνω) για το «Wij» (Εμείς)",
        dutchAudio: "Wij leren Nederlands",
        promptMain: "Wij ___ Nederlands.",
        promptSub: "Τι παίρνει πάντα ο πληθυντικός (wij, jullie, zij);",
        options: ["leren", "leert", "leer", "leeren"],
        correctAnswer: "leren",
        explanation: "Στον πληθυντικό το ρήμα μένει πάντα ολόκληρο σε -en: Wij leren!"
      },
      {
        level: 5, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Ik woon in Griekenland",
        promptMain: "Ik woon in Griekenland.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: [
          "Εγώ μένω στην Ελλάδα.",
          "Εγώ δουλεύω στην Ελλάδα.",
          "Αυτός μένει στην Ολλανδία.",
          "Εγώ μιλάω Ελληνικά."
        ],
        correctAnswer: "Εγώ μένω στην Ελλάδα.",
        explanation: "Ik woon (Εγώ μένω) + in Griekenland (στην Ελλάδα)."
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Zij spreken Grieks en Engels",
        promptMain: "Zij spreken Grieks en Engels.",
        promptSub: "Πρόσεξε την κατάληξη του ρήματος (-en)!",
        options: [
          "Αυτοί μιλάνε Ελληνικά και Αγγλικά.",
          "Αυτή μιλάει Ελληνικά και Αγγλικά.",
          "Εμείς μαθαίνουμε Ελληνικά και Αγγλικά.",
          "Εσείς μιλάτε Ολλανδικά."
        ],
        correctAnswer: "Αυτοί μιλάνε Ελληνικά και Αγγλικά.",
        explanation: "Επειδή το ρήμα είναι «spreken» (με -en), το «Zij» σημαίνει «Αυτοί»! Αν ήταν «Αυτή», θα έλεγε «Zij spreekt»."
      },
      {
        level: 7, type: "fill",
        label: "Συμπλήρωσε το κενό",
        dutchAudio: "De vrouw werkt hier",
        promptMain: "De vrouw ___ hier.",
        promptSub: "Η γυναίκα (= αυτή) δουλεύει εδώ",
        options: ["werkt", "werk", "werken", "is"],
        correctAnswer: "werkt",
        explanation: "De vrouw (3ο ενικό) -> Ρίζα + t = werkt!"
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ik leer Nederlands",
        promptMain: "Εγώ μαθαίνω Ολλανδικά",
        promptSub: "Φτιάξε την πρόταση",
        wordBank: ["Ik", "leer", "Nederlands", "leert", "leren", "Grieks"],
        acceptedAnswers: ["ik leer nederlands"],
        displayCorrect: "Ik leer Nederlands",
        explanation: "Ik (Εγώ) + leer (μαθαίνω - σκέτη ρίζα) + Nederlands (Ολλανδικά)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Wij wonen in Nederland",
        promptMain: "Εμείς μένουμε στην Ολλανδία",
        promptSub: "Πρόσεξε την κατάληξη στον πληθυντικό!",
        wordBank: ["Wij", "wonen", "in", "Nederland", "woont", "woon"],
        acceptedAnswers: ["wij wonen in nederland", "we wonen in nederland"],
        displayCorrect: "Wij wonen in Nederland",
        explanation: "Wij (Εμείς) + wonen (μένουμε) + in Nederland (στην Ολλανδία)."
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Hij woont in Nederland en hij spreekt Nederlands",
        promptMain: "Αυτός μένει στην Ολλανδία και αυτός μιλάει Ολλανδικά",
        promptSub: "Τελική δοκιμασία Εβδομάδας 5!",
        wordBank: ["Hij", "woont", "in", "Nederland", "en", "hij", "spreekt", "Nederlands", "wonen"],
        acceptedAnswers: ["hij woont in nederland en hij spreekt nederlands"],
        displayCorrect: "Hij woont in Nederland en hij spreekt Nederlands",
        explanation: "Τέλεια! Κατέκτησες την κλίση των ομαλών ρημάτων στον Ενεστώτα!"
      }
    ]
  },

  // ==========================================================================
  // ΕΒΔΟΜΑΔΑ 6: ΧΑΙΡΕΤΙΣΜΟΙ, ΣΥΣΤΑΣΕΙΣ & ΕΥΓΕΝΕΙΑ
  // ==========================================================================
  {
    week: 6,
    month: "Μήνας 2: Ομαλά Ρήματα & Επικοινωνία",
    title: "Εβδομάδα 6: Χαιρετισμοί, Συστάσεις & Ευγένεια",
    subtitle: "Πώς συστήνεσαι (Ik heet...), χαιρετισμοί όλης της ημέρας & ευχαριστίες",
    color: "green",
    icon: "🤝",
    rule: `
      <strong>Πώς λέμε το όνομά μας:</strong> Χρησιμοποιούμε το ρήμα <strong>heten</strong> (ονομάζομαι):<br>
      • <strong>Ik heet...</strong> (Εγώ ονομάζομαι...) | <strong>Hoe heet jij?</strong> (Πώς ονομάζεσαι εσύ;)<br>
      <em>Σημείωση:</em> Επειδή η ρίζα <strong>heet</strong> τελειώνει ήδη σε <strong>-t</strong>, στο 2ο/3ο ενικό δεν παίρνει δεύτερο -t (<em>jij heet, hij heet</em>)!<br><br>
      <strong>Ευγένεια:</strong> <strong>Alstublieft</strong> (Παρακαλώ/Ορίστε - επίσημο) ή <strong>Alsjeblieft</strong> (φιλικό).
    `,
    table: [
      { nl: "Goedemorgen / Goedemiddag", ph: "Χούντε-μόρχεν / Χούντε-μίνταχ", el: "Καλημέρα / Καλό απόγευμα (12:00-18:00)", note: "Χαιρετισμοί" },
      { nl: "Goedenavond / Goedenacht", ph: "Χούντεν-άφοντ / Χούντε-ναχτ", el: "Καλησπέρα / Καληνύχτα", note: "Χαιρετισμοί" },
      { nl: "Hallo / Tot ziens", ph: "Χάλο / Τοτ ζινς", el: "Γεια / Εις το επανιδείν (Αντίο)", note: "Καθημερινά" },
      { nl: "heten -> Ik heet...", ph: "χέιτεν -> Ικ χέιτ...", el: "ονομάζομαι -> Εγώ ονομάζομαι...", note: "Hoe heet jij? = Πώς σε λένε;" },
      { nl: "Ja / Nee", ph: "Για / Νέι", el: "Ναι / Όχι", note: "Βασικές απαντήσεις" },
      { nl: "Alstublieft / Dank u wel", ph: "Αλστουμπλίφτ / Ντανκ ου βελ", el: "Παρακαλώ (Ορίστε) / Σας ευχαριστώ πολύ", note: "Ευγένεια" }
    ],
    questions: [
      {
        level: 1, type: "choice",
        label: "Πώς χαιρετάμε το μεσημέρι/απόγευμα (12:00 με 18:00) στην Ολλανδία;",
        dutchAudio: "Goedemiddag",
        promptMain: "Καλό μεσημέρι / Καλό απόγευμα",
        promptSub: "Διάλεξε τον σωστό χαιρετισμό",
        options: ["Goedemiddag", "Goedemorgen", "Goedenavond", "Goedenacht"],
        correctAnswer: "Goedemiddag",
        explanation: "Goedemorgen (μέχρι τις 12:00), Goedemiddag (12:00-18:00), Goedenavond (μετά τις 18:00)."
      },
      {
        level: 2, type: "choice",
        label: "Τι σημαίνει το «Tot ziens»;",
        dutchAudio: "Tot ziens",
        promptMain: "Tot ziens!",
        promptSub: "Το λέμε όταν φεύγουμε",
        options: ["Αντίο / Εις το επανιδείν!", "Καλημέρα!", "Σας ευχαριστώ!", "Παρακαλώ!"],
        correctAnswer: "Αντίο / Εις το επανιδείν!",
        explanation: "Tot ziens = Εις το επανιδείν / Τα λέμε (Αντίο)."
      },
      {
        level: 3, type: "fill",
        label: "Συμπλήρωσε το ρήμα για να πεις «Ονομάζομαι Άννα»",
        dutchAudio: "Ik heet Anna",
        promptMain: "Ik ___ Anna.",
        promptSub: "Από το ρήμα heten (ονομάζομαι)",
        options: ["heet", "heten", "heett", "ben"],
        correctAnswer: "heet",
        explanation: "Ik heet Anna = Εγώ ονομάζομαι Άννα."
      },
      {
        level: 4, type: "choice",
        label: "Τι σημαίνει η ερώτηση «Hoe heet jij?»;",
        dutchAudio: "Hoe heet jij",
        promptMain: "Hoe heet jij?",
        promptSub: "Hoe (προφέρεται «χου») = Πώς",
        options: ["Πώς ονομάζεσαι εσύ;", "Πού μένεις εσύ;", "Τι κάνεις εσύ;", "Ποιος είσαι εσύ;"],
        correctAnswer: "Πώς ονομάζεσαι εσύ;",
        explanation: "Hoe (Πώς) + heet (ονομάζεσαι) + jij (εσύ) = Πώς σε λένε;"
      },
      {
        level: 5, type: "fill",
        label: "Συμπλήρωσε την ευγενική απάντηση",
        dutchAudio: "Ja dank u wel",
        promptMain: "Ja, ___ u wel!",
        promptSub: "Ναι, σας ευχαριστώ πολύ!",
        options: ["dank", "alstublieft", "goedemorgen", "heet"],
        correctAnswer: "dank",
        explanation: "Dank u wel (επίσημο) ή Dank je wel (φιλικό) = Ευχαριστώ πολύ!"
      },
      {
        level: 6, type: "choice",
        label: "Μετάφρασε την πρόταση στα Ελληνικά",
        dutchAudio: "Goedenavond ik heet Nikos",
        promptMain: "Goedenavond, ik heet Nikos.",
        promptSub: "Διάλεξε τη σωστή μετάφραση",
        options: [
          "Καλησπέρα, ονομάζομαι Νίκος.",
          "Καλημέρα, ονομάζομαι Νίκος.",
          "Καληνύχτα, είμαι ο Νίκος.",
          "Καλό απόγευμα, ονομάζομαι Νίκος."
        ],
        correctAnswer: "Καλησπέρα, ονομάζομαι Νίκος.",
        explanation: "Goedenavond = Καλησπέρα, ik heet Nikos = ονομάζομαι Νίκος."
      },
      {
        level: 7, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Ja alstublieft",
        promptMain: "Ναι, παρακαλώ",
        promptSub: "Φτιάξε τη φράση",
        wordBank: ["Ja", "alstublieft", "Nee", "dank", "tot", "ziens"],
        acceptedAnswers: ["ja alstublieft"],
        displayCorrect: "Ja, alstublieft",
        explanation: "Ja (Ναι), alstublieft (παρακαλώ)."
      },
      {
        level: 8, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Nee dank u wel",
        promptMain: "Όχι, σας ευχαριστώ πολύ",
        promptSub: "Φτιάξε τη φράση",
        wordBank: ["Nee", "dank", "u", "wel", "Ja", "alstublieft"],
        acceptedAnswers: ["nee dank u wel"],
        displayCorrect: "Nee, dank u wel",
        explanation: "Nee (Όχι), dank u wel (σας ευχαριστώ πολύ)."
      },
      {
        level: 9, type: "translate",
        label: "Μετάφρασε στα Ολλανδικά",
        dutchAudio: "Hallo ik heet Maria",
        promptMain: "Γεια, εγώ ονομάζομαι Μαρία",
        promptSub: "Χρησιμοποίησε το ρήμα heten",
        wordBank: ["Hallo", "ik", "heet", "Maria", "heten", "Goedemorgen"],
        acceptedAnswers: ["hallo ik heet maria"],
        displayCorrect: "Hallo, ik heet Maria",
        explanation: "Hallo, ik heet Maria!"
      },
      {
        level: 10, isBoss: true, type: "translate",
        label: "👑 MINI-BOSS (+50 XP): Ολοκληρωμένη Σύσταση!",
        dutchAudio: "Goedemorgen ik heet Kostas en ik woon in Griekenland",
        promptMain: "Καλημέρα, εγώ ονομάζομαι Κώστας και εγώ μένω στην Ελλάδα",
        promptSub: "Τελική δοκιμασία Εβδομάδας 6!",
        wordBank: ["Goedemorgen", "ik", "heet", "Kostas", "en", "ik", "woon", "in", "Griekenland"],
        acceptedAnswers: ["goedemorgen ik heet kostas en ik woon in griekenland"],
        displayCorrect: "Goedemorgen, ik heet Kostas en ik woon in Griekenland",
        explanation: "Φανταστικά! Μπορείς πλέον να χαιρετάς και να συστήνεσαι ολοκληρωμένα στα Ολλανδικά!"
      }
    ]
  }
];
