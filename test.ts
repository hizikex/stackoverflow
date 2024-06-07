module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "const_banks",
      [
        {
          id: 1,
          name: "Access Bank Nigeria",
          code: "044",
          nibss_bank_code: "000014",
          slug: "access",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "044",
            },
            monnify: {
              bankCode: "044",
            },
            nibss: {
              bankCode: "000014",
            },
            providus: {
              bankCode: "000014",
            },
            quickteller: {
              bankCode: "044",
            },
            test_transfer: {
              bankCode: "044",
            },
            wema: {
              bankCode: "000014",
            },
          }),
        },
        {
          id: 2,
          name: "FCMB Plc",
          code: "214",
          nibss_bank_code: "000003",
          slug: "fcmb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "214",
            },
            monnify: {
              bankCode: "214",
            },
            nibss: {
              bankCode: "000003",
            },
            providus: {
              bankCode: "000003",
            },
            quickteller: {
              bankCode: "214",
            },
            test_transfer: {
              bankCode: "214",
            },
            wema: {
              bankCode: "000003",
            },
          }),
        },
        {
          id: 3,
          name: "GTBank Plc",
          code: "058",
          nibss_bank_code: "000013",
          slug: "gtb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "058",
            },
            monnify: {
              bankCode: "058",
            },
            nibss: {
              bankCode: "000013",
            },
            providus: {
              bankCode: "000013",
            },
            quickteller: {
              bankCode: "058",
            },
            test_transfer: {
              bankCode: "058",
            },
            wema: {
              bankCode: "000013",
            },
          }),
        },
        {
          id: 4,
          name: "Keystone Bank",
          code: "082",
          nibss_bank_code: "000002",
          slug: "keystone",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "082",
            },
            monnify: {
              bankCode: "082",
            },
            nibss: {
              bankCode: "000002",
            },
            providus: {
              bankCode: "000002",
            },
            quickteller: {
              bankCode: "082",
            },
            test_transfer: {
              bankCode: "082",
            },
            wema: {
              bankCode: "000002",
            },
          }),
        },
        {
          id: 5,
          name: "Sterling Bank",
          code: "232",
          slug: "sterling",
          nibss_bank_code: "000001",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "232",
            },
            monnify: {
              bankCode: "232",
            },
            nibss: {
              bankCode: "000001",
            },
            providus: {
              bankCode: "000001",
            },
            quickteller: {
              bankCode: "232",
            },
            test_transfer: {
              bankCode: "232",
            },
            wema: {
              bankCode: "000001",
            },
          }),
        },
        {
          id: 6,
          name: "Stanbic IBTC Bank",
          code: "221",
          nibss_bank_code: "000012",
          slug: "stanbic",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "221",
            },
            monnify: {
              bankCode: "221",
            },
            nibss: {
              bankCode: "000012",
            },
            providus: {
              bankCode: "000012",
            },
            quickteller: {
              bankCode: "039",
            },
            test_transfer: {
              bankCode: "221",
            },
            wema: {
              bankCode: "000012",
            },
          }),
        },
        {
          id: 7,
          name: "Unity Bank",
          code: "215",
          nibss_bank_code: "000011",
          slug: "unity",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "215",
            },
            monnify: {
              bankCode: "215",
            },
            nibss: {
              bankCode: "000011",
            },
            providus: {
              bankCode: "000011",
            },
            quickteller: {
              bankCode: "215",
            },
            test_transfer: {
              bankCode: "215",
            },
            wema: {
              bankCode: "000011",
            },
          }),
        },
        {
          id: 8,
          name: "Union Bank",
          code: "032",
          nibss_bank_code: "000018",
          slug: "unionbank",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "032",
            },
            monnify: {
              bankCode: "032",
            },
            nibss: {
              bankCode: "000018",
            },
            providus: {
              bankCode: "000018",
            },
            quickteller: {
              bankCode: "032",
            },
            test_transfer: {
              bankCode: "032",
            },
            wema: {
              bankCode: "000018",
            },
          }),
        },
        {
          id: 9,
          name: "Fidelity Bank",
          code: "070",
          nibss_bank_code: "000007",
          slug: "fidelity",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070",
            },
            monnify: {
              bankCode: "070",
            },
            nibss: {
              bankCode: "000007",
            },
            providus: {
              bankCode: "000007",
            },
            quickteller: {
              bankCode: "070",
            },
            test_transfer: {
              bankCode: "070",
            },
            wema: {
              bankCode: "000007",
            },
          }),
        },
        {
          id: 10,
          name: "Wema Bank",
          code: "035",
          nibss_bank_code: "000017",
          slug: "wema",
          country: "NG",
          can_pay_with_bank: true,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "035",
            },
            monnify: {
              bankCode: "035",
            },
            nibss: {
              bankCode: "000017",
            },
            providus: {
              bankCode: "000017",
            },
            quickteller: {
              bankCode: "035",
            },
            test_transfer: {
              bankCode: "035",
            },
            wema: {
              bankCode: "000017",
            },
          }),
        },
        {
          id: 11,
          name: "JAIZ Bank",
          code: "301",
          nibss_bank_code: "000006",
          slug: "jaiz",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "301",
            },
            monnify: {
              bankCode: "301",
            },
            nibss: {
              bankCode: "000006",
            },
            providus: {
              bankCode: "000006",
            },
            quickteller: {
              bankCode: "301",
            },
            test_transfer: {
              bankCode: "301",
            },
            wema: {
              bankCode: "000006",
            },
          }),
        },
        {
          id: 12,
          name: "First Bank of Nigeria",
          code: "011",
          nibss_bank_code: "000016",
          slug: "firstbank",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "011",
            },
            monnify: {
              bankCode: "011",
            },
            nibss: {
              bankCode: "000016",
            },
            providus: {
              bankCode: "000016",
            },
            quickteller: {
              bankCode: "011",
            },
            test_transfer: {
              bankCode: "011",
            },
            wema: {
              bankCode: "000016",
            },
          }),
        },
        {
          id: 13,
          name: "Access Bank Plc (Diamond)",
          code: "063",
          nibss_bank_code: "000005",
          slug: "diamond",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "044",
            },
            monnify: {
              bankCode: "063",
            },
            nibss: {
              bankCode: "000005",
            },
            providus: {
              bankCode: "000005",
            },
            quickteller: {
              bankCode: "063",
            },
            test_transfer: {
              bankCode: "063",
            },
            wema: {
              bankCode: "000005",
            },
          }),
        },
        {
          id: 14,
          name: "Zenith Bank Plc",
          code: "057",
          nibss_bank_code: "000015",
          slug: "zenith",
          country: "NG",
          can_pay_with_bank: true,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "057",
            },
            monnify: {
              bankCode: "057",
            },
            nibss: {
              bankCode: "000015",
            },
            providus: {
              bankCode: "000015",
            },
            quickteller: {
              bankCode: "057",
            },
            test_transfer: {
              bankCode: "057",
            },
            wema: {
              bankCode: "000015",
            },
          }),
        },
        {
          id: 15,
          name: "United Bank for Africa",
          code: "033",
          nibss_bank_code: "000004",
          slug: "uba",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "033",
            },
            monnify: {
              bankCode: "033",
            },
            nibss: {
              bankCode: "000004",
            },
            providus: {
              bankCode: "000004",
            },
            quickteller: {
              bankCode: "033",
            },
            test_transfer: {
              bankCode: "033",
            },
            wema: {
              bankCode: "000004",
            },
          }),
        },
        {
          id: 16,
          name: "Citi Bank",
          code: "023",
          nibss_bank_code: "000009",
          slug: "citibankng",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "023",
            },
            monnify: {
              bankCode: "023",
            },
            nibss: {
              bankCode: "000009",
            },
            providus: {
              bankCode: "000009",
            },
            quickteller: {
              bankCode: "023",
            },
            test_transfer: {
              bankCode: "023",
            },
            wema: {
              bankCode: "000009",
            },
          }),
        },
        {
          id: 17,
          name: "Enterprise Bank",
          code: "084",
          nibss_bank_code: "000019",
          slug: "enterprise",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000019",
            },
            monnify: {
              bankCode: "084",
            },
            nibss: {
              bankCode: "000019",
            },
            providus: {
              bankCode: "000019",
            },
            quickteller: {
              bankCode: "084",
            },
            test_transfer: {
              bankCode: "084",
            },
            wema: {
              bankCode: "000019",
            },
          }),
        },
        {
          id: 18,
          name: "Polaris Bank",
          code: "076",
          nibss_bank_code: "000008",
          slug: "polaris",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "076",
            },
            monnify: {
              bankCode: "076",
            },
            nibss: {
              bankCode: "000008",
            },
            providus: {
              bankCode: "000008",
            },
            quickteller: {
              bankCode: "076",
            },
            test_transfer: {
              bankCode: "076",
            },
            wema: {
              bankCode: "000008",
            },
          }),
        },
        {
          id: 19,
          name: "Standard Chartered Bank",
          code: "068",
          nibss_bank_code: "000021",
          slug: "standard-chartered",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "068",
            },
            monnify: {
              bankCode: "068",
            },
            nibss: {
              bankCode: "000021",
            },
            providus: {
              bankCode: "000021",
            },
            quickteller: {
              bankCode: "068",
            },
            test_transfer: {
              bankCode: "068",
            },
            wema: {
              bankCode: "000021",
            },
          }),
        },
        {
          id: 20,
          name: "Ecobank",
          code: "050",
          nibss_bank_code: "000010",
          slug: "eco",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "050",
            },
            monnify: {
              bankCode: "050",
            },
            nibss: {
              bankCode: "000010",
            },
            providus: {
              bankCode: "000010",
            },
            quickteller: {
              bankCode: "050",
            },
            test_transfer: {
              bankCode: "050",
            },
            wema: {
              bankCode: "000010",
            },
          }),
        },
        {
          id: 21,
          name: "Heritage Bank",
          code: "030",
          nibss_bank_code: "000020",
          slug: "heritage",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "030",
            },
            monnify: {
              bankCode: "030",
            },
            nibss: {
              bankCode: "000020",
            },
            providus: {
              bankCode: "000020",
            },
            quickteller: {
              bankCode: "030",
            },
            test_transfer: {
              bankCode: "030",
            },
            wema: {
              bankCode: "000020",
            },
          }),
        },
        {
          id: 22,
          name: "Providus Bank",
          code: "101",
          nibss_bank_code: "000023",
          slug: "providus",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "101",
            },
            monnify: {
              bankCode: "101",
            },
            nibss: {
              bankCode: "000023",
            },
            providus: {
              bankCode: "000023",
            },
            quickteller: {
              bankCode: "101",
            },
            test_transfer: {
              bankCode: "101",
            },
            wema: {
              bankCode: "000023",
            },
          }),
        },
        {
          id: 23,
          name: "Mainstreet Micro-finance Bank",
          code: "014",
          nibss_bank_code: "090171",
          slug: "mainstreet-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090171",
            },
            monnify: {
              bankCode: "090171",
            },
            nibss: {
              bankCode: "090171",
            },
            providus: {
              bankCode: "090171",
            },
            quickteller: {
              bankCode: "014",
            },
            test_transfer: {
              bankCode: "014",
            },
            wema: {
              bankCode: "090171",
            },
          }),
        },
        {
          id: 24,
          name: "Stanbic Mobile",
          code: "304",
          slug: "stanbic-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "304",
            },
            monnify: {
              bankCode: "304",
            },
            nibss: {
              bankCode: "100007",
            },
            providus: {
              bankCode: "100007",
            },
            quickteller: {
              bankCode: "304",
            },
            test_transfer: {
              bankCode: "304",
            },
            wema: {
              bankCode: "100007",
            },
          }),
        },
        {
          id: 25,
          name: "PAYCOM",
          code: "305",
          nibss_bank_code: "100004",
          slug: "paycom",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "305",
            },
            monnify: {
              bankCode: "304",
            },
            nibss: {
              bankCode: "100004",
            },
            providus: {
              bankCode: "100004",
            },
            quickteller: {
              bankCode: "363",
            },
            test_transfer: {
              bankCode: "305",
            },
            wema: {
              bankCode: "100004",
            },
          }),
        },
        {
          id: 26,
          name: "Ecobank Mobile",
          code: "307",
          slug: "ecobank-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100030",
            },
            monnify: {
              bankCode: "307",
            },
            nibss: {
              bankCode: "100008",
            },
            providus: {
              bankCode: "100008",
            },
            quickteller: {
              bankCode: "307",
            },
            test_transfer: {
              bankCode: "307",
            },
            wema: {
              bankCode: "100008",
            },
          }),
        },
        {
          id: 27,
          name: "FBN MOBILE",
          code: "309",
          slug: "first-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100014",
            },
            monnify: {
              bankCode: "309",
            },
            nibss: {
              bankCode: "100014",
            },
            providus: {
              bankCode: "100014",
            },
            quickteller: {
              bankCode: "309",
            },
            test_transfer: {
              bankCode: "309",
            },
            wema: {
              bankCode: "100014",
            },
          }),
        },
        {
          id: 28,
          name: "Parkway",
          code: "311",
          slug: "parkway",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100003",
            },
            monnify: {
              bankCode: "311",
            },
            nibss: {
              bankCode: "090390",
            },
            providus: {
              bankCode: "090390",
            },
            quickteller: {
              bankCode: "314",
            },
            test_transfer: {
              bankCode: "311",
            },
            wema: {
              bankCode: "090390",
            },
          }),
        },
        {
          id: 29,
          name: "GTBank Mobile Money",
          code: "315",
          slug: "gtb-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100009",
            },
            monnify: {
              bankCode: "315",
            },
            nibss: {
              bankCode: "100009",
            },
            providus: {
              bankCode: "100009",
            },
            quickteller: {
              bankCode: "315",
            },
            test_transfer: {
              bankCode: "315",
            },
            wema: {
              bankCode: "100009",
            },
          }),
        },
        {
          id: 30,
          name: "ZENITH Mobile",
          code: "322",
          slug: "zenith-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          nibss_bank_code: "100018",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100018",
            },
            monnify: {
              bankCode: "932",
            },
            nibss: {
              bankCode: "100018",
            },
            providus: {
              bankCode: "100018",
            },
            quickteller: {
              bankCode: "322",
            },
            test_transfer: {
              bankCode: "322",
            },
            wema: {
              bankCode: "100018",
            },
          }),
        },
        {
          id: 31,
          name: "ACCESS MOBILE",
          code: "323",
          slug: "access-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100013",
            },
            monnify: {
              bankCode: "323",
            },
            nibss: {
              bankCode: "100013",
            },
            providus: {
              bankCode: "100013",
            },
            quickteller: {
              bankCode: "323",
            },
            test_transfer: {
              bankCode: "323",
            },
            wema: {
              bankCode: "100013",
            },
          }),
        },
        {
          id: 32,
          name: "Aso Savings and Loans",
          code: "401",
          slug: "aso-savings",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          nibss_bank_code: "090001",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090001",
            },
            monnify: {
              bankCode: "905",
            },
            nibss: {
              bankCode: "090001",
            },
            providus: {
              bankCode: "090001",
            },
            quickteller: {
              bankCode: "121",
            },
            test_transfer: {
              bankCode: "401",
            },
            wema: {
              bankCode: "090001",
            },
          }),
        },
        {
          id: 33,
          name: "PARALLEX BANK",
          code: "526",
          nibss_bank_code: "000030",
          slug: "parallex",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000030",
            },
            monnify: {
              bankCode: "907",
            },
            nibss: {
              bankCode: "000030",
            },
            providus: {
              bankCode: "000030",
            },
            quickteller: {
              bankCode: "318",
            },
            test_transfer: {
              bankCode: "526",
            },
            wema: {
              bankCode: "000030",
            },
          }),
        },
        {
          id: 34,
          name: "Coronation Merchant Bank",
          code: "559",
          nibss_bank_code: "060001",
          slug: "cmfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "060001",
            },
            monnify: {
              bankCode: "946",
            },
            nibss: {
              bankCode: "060001",
            },
            providus: {
              bankCode: "060001",
            },
            quickteller: {
              bankCode: "559",
            },
            test_transfer: {
              bankCode: "559",
            },
            wema: {
              bankCode: "060001",
            },
          }),
        },
        {
          id: 35,
          name: "FSDH Merchant Bank",
          code: "601",
          slug: "fsdh",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          nibss_bank_code: "400001",
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "400001",
            },
            monnify: {
              bankCode: "601",
            },
            nibss: {
              bankCode: "400001",
            },
            providus: {
              bankCode: "400001",
            },
            quickteller: {
              bankCode: "501",
            },
            test_transfer: {
              bankCode: "601",
            },
            wema: {
              bankCode: "400001",
            },
          }),
        },
        {
          id: 36,
          name: "Monnify Test Bank",
          code: "001",
          nibss_bank_code: "001",
          slug: "mntb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "001",
            },
            monnify: {
              bankCode: "001",
            },
            nibss: {
              bankCode: "001",
            },
            providus: {
              bankCode: "001",
            },
            quickteller: {
              bankCode: "001",
            },
            test_transfer: {
              bankCode: "001",
            },
            wema: {
              bankCode: "001",
            },
          }),
        },
        {
          id: 37,
          name: "Kuda Micro-finance Bank",
          code: "50211",
          nibss_bank_code: "090267",
          slug: "kuda-mfb",
          country: "NG",
          can_pay_with_bank: true,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090267",
            },
            monnify: {
              bankCode: "50211",
            },
            nibss: {
              bankCode: "090267",
            },
            providus: {
              bankCode: "090267",
            },
            quickteller: {
              bankCode: "514",
            },
            test_transfer: {
              bankCode: "50211",
            },
            wema: {
              bankCode: "090267",
            },
          }),
        },
        {
          id: 38,
          name: "Rubies Micro-finance Bank",
          code: "125",
          nibss_bank_code: "090175",
          slug: "rubies-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090175",
            },
            monnify: {
              bankCode: "125",
            },
            nibss: {
              bankCode: "090175",
            },
            providus: {
              bankCode: "090175",
            },
            quickteller: {
              bankCode: "426",
            },
            test_transfer: {
              bankCode: "125",
            },
            wema: {
              bankCode: "090175",
            },
          }),
        },
        {
          id: 39,
          name: "Suntrust Bank Nigeria Limited",
          code: "100",
          nibss_bank_code: "000022",
          slug: "suntrust",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100",
            },
            monnify: {
              bankCode: "100",
            },
            nibss: {
              bankCode: "000022",
            },
            providus: {
              bankCode: "000022",
            },
            quickteller: {
              bankCode: "100",
            },
            test_transfer: {
              bankCode: "100",
            },
            wema: {
              bankCode: "000022",
            },
          }),
        },
        {
          id: 40,
          name: "Taj Bank",
          code: "302",
          nibss_bank_code: "000026",
          slug: "taj",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000026",
            },
            monnify: {
              bankCode: "302",
            },
            nibss: {
              bankCode: "000026",
            },
            providus: {
              bankCode: "000026",
            },
            quickteller: {
              bankCode: "302",
            },
            test_transfer: {
              bankCode: "302",
            },
            wema: {
              bankCode: "000026",
            },
          }),
        },
        {
          id: 41,
          name: "VFD Micro-finance Bank",
          code: "566",
          nibss_bank_code: "090110",
          slug: "vfd-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090110",
            },
            monnify: {
              bankCode: "566",
            },
            nibss: {
              bankCode: "090110",
            },
            providus: {
              bankCode: "090110",
            },
            quickteller: {
              bankCode: "354",
            },
            test_transfer: {
              bankCode: "566",
            },
            wema: {
              bankCode: "090110",
            },
          }),
        },
        {
          id: 42,
          name: "Titan Trust Bank",
          code: "102",
          nibss_bank_code: "000025",
          slug: "titan",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000025",
            },
            monnify: {
              bankCode: "102",
            },
            nibss: {
              bankCode: "000025",
            },
            providus: {
              bankCode: "000025",
            },
            quickteller: {
              bankCode: "102",
            },
            test_transfer: {
              bankCode: "102",
            },
            wema: {
              bankCode: "000025",
            },
          }),
        },
        {
          id: 43,
          name: "Rand Merchant Bank",
          code: "502",
          nibss_bank_code: "000024",
          slug: "rand-meb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "502",
            },
            monnify: {
              bankCode: "502",
            },
            nibss: {
              bankCode: "000024",
            },
            providus: {
              bankCode: "000024",
            },
            quickteller: {
              bankCode: "502",
            },
            test_transfer: {
              bankCode: "502",
            },
            wema: {
              bankCode: "000024",
            },
          }),
        },
        {
          id: 44,
          name: "FBNQuest Merchant Bank",
          code: "911",
          nibss_bank_code: "060002",
          slug: "fbnquest-meb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "060002",
            },
            monnify: {
              bankCode: "911",
            },
            nibss: {
              bankCode: "060002",
            },
            providus: {
              bankCode: "060002",
            },
            quickteller: {
              bankCode: "560",
            },
            test_transfer: {
              bankCode: "911",
            },
            wema: {
              bankCode: "060002",
            },
          }),
        },
        {
          id: 45,
          name: "Nova Merchant Bank",
          code: "637",
          nibss_bank_code: "060003",
          slug: "nova-meb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "060003",
            },
            monnify: {
              bankCode: "637",
            },
            nibss: {
              bankCode: "060003",
            },
            providus: {
              bankCode: "060003",
            },
            quickteller: {
              bankCode: "637",
            },
            test_transfer: {
              bankCode: "637",
            },
            wema: {
              bankCode: "060003",
            },
          }),
        },
        {
          id: 46,
          name: "Fortis Micro-finance Bank",
          code: "948",
          nibss_bank_code: "070002",
          slug: "fortis-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070002",
            },
            monnify: {
              bankCode: "948",
            },
            nibss: {
              bankCode: "070002",
            },
            providus: {
              bankCode: "070002",
            },
            quickteller: {
              bankCode: "313",
            },
            test_transfer: {
              bankCode: "948",
            },
            wema: {
              bankCode: "070002",
            },
          }),
        },
        {
          id: 47,
          name: "Covenant Micro-finance Bank",
          code: "949",
          nibss_bank_code: "070006",
          slug: "covenant-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070006",
            },
            monnify: {
              bankCode: "949",
            },
            nibss: {
              bankCode: "070006",
            },
            providus: {
              bankCode: "070006",
            },
            quickteller: {
              bankCode: "323",
            },
            test_transfer: {
              bankCode: "949",
            },
            wema: {
              bankCode: "070006",
            },
          }),
        },
        {
          id: 48,
          name: "Omoluabi Mortgage Bank Plc",
          code: "950",
          nibss_bank_code: "070007",
          slug: "omoluabi-mob",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070007",
            },
            monnify: {
              bankCode: "950",
            },
            nibss: {
              bankCode: "070007",
            },
            providus: {
              bankCode: "070007",
            },
            quickteller: {
              bankCode: "950",
            },
            test_transfer: {
              bankCode: "950",
            },
            wema: {
              bankCode: "070007",
            },
          }),
        },
        {
          id: 49,
          name: "Page Micro-finance Bank",
          code: "951",
          nibss_bank_code: "070008",
          slug: "page-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070008",
            },
            monnify: {
              bankCode: "951",
            },
            nibss: {
              bankCode: "070008",
            },
            providus: {
              bankCode: "070008",
            },
            quickteller: {
              bankCode: "343",
            },
            test_transfer: {
              bankCode: "951",
            },
            wema: {
              bankCode: "070008",
            },
          }),
        },
        {
          id: 50,
          name: "Jubliee Life",
          code: "906",
          nibss_bank_code: "090003",
          slug: "jubliee-life",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090003",
            },
            monnify: {
              bankCode: "906",
            },
            nibss: {
              bankCode: "090003",
            },
            providus: {
              bankCode: "090003",
            },
            quickteller: {
              bankCode: "321",
            },
            test_transfer: {
              bankCode: "906",
            },
            wema: {
              bankCode: "090003",
            },
          }),
        },
        {
          id: 51,
          name: "SafeTrust",
          code: "909",
          nibss_bank_code: "090006",
          slug: "safetrust",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090006",
            },
            monnify: {
              bankCode: "909",
            },
            nibss: {
              bankCode: "090006",
            },
            providus: {
              bankCode: "090006",
            },
            quickteller: {
              bankCode: "909",
            },
            test_transfer: {
              bankCode: "909",
            },
            wema: {
              bankCode: "090006",
            },
          }),
        },
        {
          id: 52,
          name: "First Trust Mortgage Bank Plc",
          code: "910",
          slug: "first-trust-mob",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "910",
            },
            monnify: {
              bankCode: "910",
            },
            nibss: {
              bankCode: "910",
            },
            providus: {
              bankCode: "910",
            },
            quickteller: {
              bankCode: "322",
            },
            test_transfer: {
              bankCode: "910",
            },
            wema: {
              bankCode: "910",
            },
          }),
        },
        {
          id: 53,
          name: "Seed Capital Micro-finance Bank",
          code: "609",
          nibss_bank_code: "090112",
          slug: "seed-capital-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090112",
            },
            monnify: {
              bankCode: "609",
            },
            nibss: {
              bankCode: "090112",
            },
            providus: {
              bankCode: "090112",
            },
            quickteller: {
              bankCode: "609",
            },
            test_transfer: {
              bankCode: "609",
            },
            wema: {
              bankCode: "090112",
            },
          }),
        },
        {
          id: 54,
          name: "Empire Trust Micro-finance Bank",
          code: "913",
          nibss_bank_code: "090114",
          slug: "empire-trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090114",
            },
            monnify: {
              bankCode: "913",
            },
            nibss: {
              bankCode: "090114",
            },
            providus: {
              bankCode: "090114",
            },
            quickteller: {
              bankCode: "913",
            },
            test_transfer: {
              bankCode: "913",
            },
            wema: {
              bankCode: "090114",
            },
          }),
        },
        {
          id: 55,
          name: "TCF Micro-finance Bank",
          code: "567",
          nibss_bank_code: "090115",
          slug: "tcf-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090115",
            },
            monnify: {
              bankCode: "51211",
            },
            nibss: {
              bankCode: "090115",
            },
            providus: {
              bankCode: "090115",
            },
            quickteller: {
              bankCode: "335",
            },
            test_transfer: {
              bankCode: "567",
            },
            wema: {
              bankCode: "090115",
            },
          }),
        },
        {
          id: 56,
          name: "AMML Micro-finance Bank",
          code: "914",
          nibss_bank_code: "090116",
          slug: "amml-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090116",
            },
            monnify: {
              bankCode: "914",
            },
            nibss: {
              bankCode: "090116",
            },
            providus: {
              bankCode: "090116",
            },
            quickteller: {
              bankCode: "366",
            },
            test_transfer: {
              bankCode: "914",
            },
            wema: {
              bankCode: "090116",
            },
          }),
        },
        {
          id: 57,
          name: "BOCTrust Micro-finance Bank",
          code: "952",
          nibss_bank_code: "090117",
          slug: "boc-trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090117",
            },
            monnify: {
              bankCode: "952",
            },
            nibss: {
              bankCode: "090117",
            },
            providus: {
              bankCode: "090117",
            },
            quickteller: {
              bankCode: "952",
            },
            test_transfer: {
              bankCode: "952",
            },
            wema: {
              bankCode: "090117",
            },
          }),
        },
        {
          id: 58,
          name: "WetLand Micro-finance Bank",
          code: "954",
          nibss_bank_code: "090120",
          slug: "wetland-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090120",
            },
            monnify: {
              bankCode: "954",
            },
            nibss: {
              bankCode: "090120",
            },
            providus: {
              bankCode: "090120",
            },
            quickteller: {
              bankCode: "309",
            },
            test_transfer: {
              bankCode: "954",
            },
            wema: {
              bankCode: "090120",
            },
          }),
        },
        {
          id: 59,
          name: "Hasal Micro-finance Bank",
          code: "958",
          nibss_bank_code: "090121",
          slug: "hasal-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090121",
            },
            monnify: {
              bankCode: "50383",
            },
            nibss: {
              bankCode: "090121",
            },
            providus: {
              bankCode: "090121",
            },
            quickteller: {
              bankCode: "096",
            },
            test_transfer: {
              bankCode: "958",
            },
            wema: {
              bankCode: "090121",
            },
          }),
        },
        {
          id: 60,
          name: "Regent Micro-finance Bank",
          code: "955",
          nibss_bank_code: "090125",
          slug: "regent-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090125",
            },
            monnify: {
              bankCode: "955",
            },
            nibss: {
              bankCode: "090125",
            },
            providus: {
              bankCode: "090125",
            },
            quickteller: {
              bankCode: "955",
            },
            test_transfer: {
              bankCode: "955",
            },
            wema: {
              bankCode: "090125",
            },
          }),
        },
        {
          id: 61,
          name: "Money Trust Micro-finance Bank",
          code: "963",
          nibss_bank_code: "090129",
          slug: "money-trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090129",
            },
            monnify: {
              bankCode: "963",
            },
            nibss: {
              bankCode: "090129",
            },
            providus: {
              bankCode: "090129",
            },
            quickteller: {
              bankCode: "963",
            },
            test_transfer: {
              bankCode: "963",
            },
            wema: {
              bankCode: "090129",
            },
          }),
        },
        {
          id: 62,
          name: "Sagamu Micro-finance Bank",
          code: "966",
          nibss_bank_code: "090140",
          slug: "sagamu-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090140",
            },
            monnify: {
              bankCode: "966",
            },
            nibss: {
              bankCode: "090140",
            },
            providus: {
              bankCode: "090140",
            },
            quickteller: {
              bankCode: "966",
            },
            test_transfer: {
              bankCode: "966",
            },
            wema: {
              bankCode: "090140",
            },
          }),
        },
        {
          id: 63,
          name: "FETS",
          code: "915",
          nibss_bank_code: "100001",
          slug: "fets",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100001",
            },
            monnify: {
              bankCode: "915",
            },
            nibss: {
              bankCode: "100001",
            },
            providus: {
              bankCode: "100001",
            },
            quickteller: {
              bankCode: "915",
            },
            test_transfer: {
              bankCode: "915",
            },
            wema: {
              bankCode: "100001",
            },
          }),
        },
        {
          id: 64,
          name: "PAGA",
          code: "916",
          nibss_bank_code: "100002",
          slug: "paga",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "327",
            },
            monnify: {
              bankCode: "327",
            },
            nibss: {
              bankCode: "100002",
            },
            providus: {
              bankCode: "100002",
            },
            quickteller: {
              bankCode: "507",
            },
            test_transfer: {
              bankCode: "916",
            },
            wema: {
              bankCode: "100002",
            },
          }),
        },
        {
          id: 65,
          name: "ParkWay-ReadyCash",
          code: "917",
          nibss_bank_code: "100003",
          slug: "parkway-readycash",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100003",
            },
            monnify: {
              bankCode: "917",
            },
            nibss: {
              bankCode: "100003",
            },
            providus: {
              bankCode: "100003",
            },
            quickteller: {
              bankCode: "917",
            },
            test_transfer: {
              bankCode: "917",
            },
            wema: {
              bankCode: "100003",
            },
          }),
        },
        {
          id: 66,
          name: "Cellulant",
          code: "919",
          nibss_bank_code: "100005",
          slug: "cellulant",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100005",
            },
            monnify: {
              bankCode: "919",
            },
            nibss: {
              bankCode: "100005",
            },
            providus: {
              bankCode: "100005",
            },
            quickteller: {
              bankCode: "919",
            },
            test_transfer: {
              bankCode: "919",
            },
            wema: {
              bankCode: "100005",
            },
          }),
        },
        {
          id: 67,
          name: "eTRANZACT",
          code: "920",
          nibss_bank_code: "100006",
          slug: "e-tranzact",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100006",
            },
            monnify: {
              bankCode: "920",
            },
            nibss: {
              bankCode: "100006",
            },
            providus: {
              bankCode: "100006",
            },
            quickteller: {
              bankCode: "920",
            },
            test_transfer: {
              bankCode: "920",
            },
            wema: {
              bankCode: "100006",
            },
          }),
        },
        {
          id: 68,
          name: "Stanbic IBTC @ease Wallet",
          code: "921",
          nibss_bank_code: "100007",
          slug: "stanbic-ibtc-ease-wallet",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100007",
            },
            monnify: {
              bankCode: "921",
            },
            nibss: {
              bankCode: "100007",
            },
            providus: {
              bankCode: "100007",
            },
            quickteller: {
              bankCode: "921",
            },
            test_transfer: {
              bankCode: "921",
            },
            wema: {
              bankCode: "100007",
            },
          }),
        },
        {
          id: 69,
          name: "EcoBank Express Account",
          code: "922",
          nibss_bank_code: "100008",
          slug: "ecobank-express-account",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100008",
            },
            monnify: {
              bankCode: "922",
            },
            nibss: {
              bankCode: "100008",
            },
            providus: {
              bankCode: "100008",
            },
            quickteller: {
              bankCode: "922",
            },
            test_transfer: {
              bankCode: "922",
            },
            wema: {
              bankCode: "100008",
            },
          }),
        },
        {
          id: 70,
          name: "GT MOBILE",
          code: "923",
          nibss_bank_code: "100009",
          slug: "gt-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100009",
            },
            monnify: {
              bankCode: "923",
            },
            nibss: {
              bankCode: "100009",
            },
            providus: {
              bankCode: "100009",
            },
            quickteller: {
              bankCode: "923",
            },
            test_transfer: {
              bankCode: "923",
            },
            wema: {
              bankCode: "100009",
            },
          }),
        },
        {
          id: 71,
          name: "Teasy MOBILE",
          code: "924",
          nibss_bank_code: "100010",
          slug: "teasy-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100010",
            },
            monnify: {
              bankCode: "924",
            },
            nibss: {
              bankCode: "100010",
            },
            providus: {
              bankCode: "100010",
            },
            quickteller: {
              bankCode: "924",
            },
            test_transfer: {
              bankCode: "924",
            },
            wema: {
              bankCode: "100010",
            },
          }),
        },
        {
          id: 72,
          name: "VT Networks",
          code: "926",
          nibss_bank_code: "100012",
          slug: "vt-networks",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100012",
            },
            monnify: {
              bankCode: "926",
            },
            nibss: {
              bankCode: "100012",
            },
            providus: {
              bankCode: "100012",
            },
            quickteller: {
              bankCode: "926",
            },
            test_transfer: {
              bankCode: "926",
            },
            wema: {
              bankCode: "100012",
            },
          }),
        },
        {
          id: 73,
          name: "Access Money",
          code: "927",
          nibss_bank_code: "100013",
          slug: "access-money",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100013",
            },
            monnify: {
              bankCode: "927",
            },
            nibss: {
              bankCode: "100013",
            },
            providus: {
              bankCode: "100013",
            },
            quickteller: {
              bankCode: "927",
            },
            test_transfer: {
              bankCode: "927",
            },
            wema: {
              bankCode: "100013",
            },
          }),
        },
        {
          id: 74,
          name: "FirstMonie Wallet",
          code: "928",
          nibss_bank_code: "100014",
          slug: "firstMonie-wallet",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100014",
            },
            monnify: {
              bankCode: "928",
            },
            nibss: {
              bankCode: "100014",
            },
            providus: {
              bankCode: "100014",
            },
            quickteller: {
              bankCode: "928",
            },
            test_transfer: {
              bankCode: "928",
            },
            wema: {
              bankCode: "100014",
            },
          }),
        },
        {
          id: 75,
          name: "Chams Mobile",
          code: "929",
          slug: "chams-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "303",
            },
            monnify: {
              bankCode: "929",
            },
            nibss: {
              bankCode: "929",
            },
            providus: {
              bankCode: "929",
            },
            quickteller: {
              bankCode: "929",
            },
            test_transfer: {
              bankCode: "929",
            },
            wema: {
              bankCode: "929",
            },
          }),
        },
        {
          id: 76,
          name: "Fortis Mobile",
          code: "930",
          nibss_bank_code: "100016",
          slug: "fortis-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100016",
            },
            monnify: {
              bankCode: "930",
            },
            nibss: {
              bankCode: "100016",
            },
            providus: {
              bankCode: "100016",
            },
            quickteller: {
              bankCode: "930",
            },
            test_transfer: {
              bankCode: "930",
            },
            wema: {
              bankCode: "100016",
            },
          }),
        },
        {
          id: 77,
          name: "Hedonmark",
          code: "931",
          nibss_bank_code: "100017",
          slug: "hedonmark",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100017",
            },
            monnify: {
              bankCode: "931",
            },
            nibss: {
              bankCode: "100017",
            },
            providus: {
              bankCode: "100017",
            },
            quickteller: {
              bankCode: "931",
            },
            test_transfer: {
              bankCode: "931",
            },
            wema: {
              bankCode: "100017",
            },
          }),
        },
        {
          id: 78,
          name: "Fidelity Mobile",
          code: "933",
          nibss_bank_code: "100019",
          slug: "Fidelity-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100019",
            },
            monnify: {
              bankCode: "933",
            },
            nibss: {
              bankCode: "100019",
            },
            providus: {
              bankCode: "100019",
            },
            quickteller: {
              bankCode: "933",
            },
            test_transfer: {
              bankCode: "933",
            },
            wema: {
              bankCode: "100019",
            },
          }),
        },
        {
          id: 79,
          name: "MoneyBox",
          code: "934",
          nibss_bank_code: "100020",
          slug: "money-box",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100020",
            },
            monnify: {
              bankCode: "934",
            },
            nibss: {
              bankCode: "100020",
            },
            providus: {
              bankCode: "100020",
            },
            quickteller: {
              bankCode: "934",
            },
            test_transfer: {
              bankCode: "934",
            },
            wema: {
              bankCode: "100020",
            },
          }),
        },
        {
          id: 80,
          name: "Eartholeum",
          code: "935",
          nibss_bank_code: "100021",
          slug: "eartholeum",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100021",
            },
            monnify: {
              bankCode: "935",
            },
            nibss: {
              bankCode: "100021",
            },
            providus: {
              bankCode: "100021",
            },
            quickteller: {
              bankCode: "935",
            },
            test_transfer: {
              bankCode: "935",
            },
            wema: {
              bankCode: "100021",
            },
          }),
        },
        {
          id: 81,
          name: "Sterling Mobile",
          code: "936",
          slug: "sterling-mobile",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "936",
            },
            monnify: {
              bankCode: "936",
            },
            nibss: {
              bankCode: "936",
            },
            providus: {
              bankCode: "936",
            },
            quickteller: {
              bankCode: "936",
            },
            test_transfer: {
              bankCode: "936",
            },
            wema: {
              bankCode: "936",
            },
          }),
        },
        {
          id: 82,
          name: "TAGPAY",
          code: "937",
          nibss_bank_code: "100023",
          slug: "tagpay",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100023",
            },
            monnify: {
              bankCode: "937",
            },
            nibss: {
              bankCode: "100023",
            },
            providus: {
              bankCode: "100023",
            },
            quickteller: {
              bankCode: "937",
            },
            test_transfer: {
              bankCode: "937",
            },
            wema: {
              bankCode: "100023",
            },
          }),
        },
        {
          id: 83,
          name: "Imperial Homes Mortgage Bank",
          code: "938",
          nibss_bank_code: "100024",
          slug: "imperial-homes-mob",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100024",
            },
            monnify: {
              bankCode: "938",
            },
            nibss: {
              bankCode: "100024",
            },
            providus: {
              bankCode: "100024",
            },
            quickteller: {
              bankCode: "414",
            },
            test_transfer: {
              bankCode: "938",
            },
            wema: {
              bankCode: "100024",
            },
          }),
        },
        {
          id: 84,
          name: "ZINTERNET - KONGAPAY",
          code: "939",
          nibss_bank_code: "100025",
          slug: "zinternet-kongapay",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100025",
            },
            monnify: {
              bankCode: "939",
            },
            nibss: {
              bankCode: "100025",
            },
            providus: {
              bankCode: "100025",
            },
            quickteller: {
              bankCode: "939",
            },
            test_transfer: {
              bankCode: "939",
            },
            wema: {
              bankCode: "100025",
            },
          }),
        },
        {
          id: 85,
          name: "One Finance",
          code: "940",
          nibss_bank_code: "100026",
          slug: "one-finance",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100026",
            },
            monnify: {
              bankCode: "940",
            },
            nibss: {
              bankCode: "100026",
            },
            providus: {
              bankCode: "100026",
            },
            quickteller: {
              bankCode: "526",
            },
            test_transfer: {
              bankCode: "940",
            },
            wema: {
              bankCode: "100026",
            },
          }),
        },
        {
          id: 86,
          name: "Intellfin",
          code: "941",
          nibss_bank_code: "100027",
          slug: "intellfin",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100027",
            },
            monnify: {
              bankCode: "941",
            },
            nibss: {
              bankCode: "100027",
            },
            providus: {
              bankCode: "100027",
            },
            quickteller: {
              bankCode: "941",
            },
            test_transfer: {
              bankCode: "941",
            },
            wema: {
              bankCode: "100027",
            },
          }),
        },
        {
          id: 87,
          name: "PayAttitude Online",
          code: "943",
          nibss_bank_code: "110001",
          slug: "pay-attitude-online",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "110001",
            },
            monnify: {
              bankCode: "943",
            },
            nibss: {
              bankCode: "110001",
            },
            providus: {
              bankCode: "110001",
            },
            quickteller: {
              bankCode: "943",
            },
            test_transfer: {
              bankCode: "943",
            },
            wema: {
              bankCode: "110001",
            },
          }),
        },
        {
          id: 88,
          name: "NPF Micro-finance Bank",
          code: "947",
          nibss_bank_code: "070001",
          slug: "npf-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070001",
            },
            monnify: {
              bankCode: "947",
            },
            nibss: {
              bankCode: "070001",
            },
            providus: {
              bankCode: "070001",
            },
            quickteller: {
              bankCode: "552",
            },
            test_transfer: {
              bankCode: "947",
            },
            wema: {
              bankCode: "070001",
            },
          }),
        },
        {
          id: 89,
          name: "Mint-Finex Micro-finance Bank",
          code: "50304",
          nibss_bank_code: "090281",
          slug: "mint-finex-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090281",
            },
            monnify: {
              bankCode: "50304",
            },
            nibss: {
              bankCode: "090281",
            },
            providus: {
              bankCode: "090281",
            },
            quickteller: {
              bankCode: "50304",
            },
            test_transfer: {
              bankCode: "50304",
            },
            wema: {
              bankCode: "090281",
            },
          }),
        },
        {
          id: 90,
          name: "Globus Bank",
          code: "103",
          nibss_bank_code: "000027",
          slug: "globus-bank",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "103",
            },
            monnify: {
              bankCode: "103",
            },
            nibss: {
              bankCode: "000027",
            },
            providus: {
              bankCode: "000027",
            },
            quickteller: {
              bankCode: "103",
            },
            test_transfer: {
              bankCode: "103",
            },
            wema: {
              bankCode: "000027",
            },
          }),
        },
        {
          id: 91,
          name: "FINATRUST MICROFINANCE BANK",
          code: "090111",
          nibss_bank_code: "090111",
          slug: "finatrust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "608",
            },
            monnify: {
              bankCode: "090111",
            },
            nibss: {
              bankCode: "090111",
            },
            providus: {
              bankCode: "090111",
            },
            quickteller: {
              bankCode: "090111",
            },
            test_transfer: {
              bankCode: "090111",
            },
            wema: {
              bankCode: "090111",
            },
          }),
        },
        {
          id: 92,
          name: "GoMoney",
          code: "100022",
          nibss_bank_code: "100022",
          slug: "go-money",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100022",
            },
            monnify: {
              bankCode: "100022",
            },
            nibss: {
              bankCode: "100022",
            },
            providus: {
              bankCode: "100022",
            },
            quickteller: {
              bankCode: "530",
            },
            test_transfer: {
              bankCode: "100022",
            },
            wema: {
              bankCode: "100022",
            },
          }),
        },
        {
          id: 93,
          name: "AMJU Unique Microfinance Bank",
          code: "090180",
          nibss_bank_code: "090180",
          slug: "amju-unique-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090180",
            },
            monnify: {
              bankCode: "090180",
            },
            nibss: {
              bankCode: "090180",
            },
            providus: {
              bankCode: "090180",
            },
            quickteller: {
              bankCode: "306",
            },
            test_transfer: {
              bankCode: "090180",
            },
            wema: {
              bankCode: "090180",
            },
          }),
        },
        {
          id: 94,
          name: "BRIDGEWAY MICROFINANCE BANK",
          code: "090393",
          nibss_bank_code: "090393",
          slug: "bridgeway-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090393",
            },
            monnify: {
              bankCode: "090393",
            },
            nibss: {
              bankCode: "090393",
            },
            providus: {
              bankCode: "090393",
            },
            quickteller: {
              bankCode: "090393",
            },
            test_transfer: {
              bankCode: "090393",
            },
            wema: {
              bankCode: "090393",
            },
          }),
        },
        {
          id: 95,
          name: "Eyowo MFB",
          code: "090328",
          nibss_bank_code: "090328",
          slug: "eyowo-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090328",
            },
            monnify: {
              bankCode: "50126",
            },
            nibss: {
              bankCode: "090328",
            },
            providus: {
              bankCode: "090328",
            },
            quickteller: {
              bankCode: "090328",
            },
            test_transfer: {
              bankCode: "090328",
            },
            wema: {
              bankCode: "090328",
            },
          }),
        },
        {
          id: 96,
          name: "9 Payment Service Bank",
          code: "000802",
          nibss_bank_code: "000802",
          slug: "9payment",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000802",
            },
            monnify: {
              bankCode: "120001",
            },
            nibss: {
              bankCode: "000802",
            },
            providus: {
              bankCode: "000802",
            },
            quickteller: {
              bankCode: "000802",
            },
            test_transfer: {
              bankCode: "000802",
            },
            wema: {
              bankCode: "000802",
            },
          }),
        },
        {
          id: 97,
          name: "PatrickGold Microfinance Bank",
          code: "090317",
          nibss_bank_code: "090317",
          slug: "patrick-gold-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090317",
            },
            monnify: {
              bankCode: "090317",
            },
            nibss: {
              bankCode: "090317",
            },
            providus: {
              bankCode: "090317",
            },
            quickteller: {
              bankCode: "090317",
            },
            test_transfer: {
              bankCode: "090317",
            },
            wema: {
              bankCode: "090317",
            },
          }),
        },
        {
          id: 98,
          name: "Sparkle",
          code: "090325",
          nibss_bank_code: "090325",
          slug: "sparkle",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090325",
            },
            monnify: {
              bankCode: "51310",
            },
            nibss: {
              bankCode: "090325",
            },
            providus: {
              bankCode: "090325",
            },
            quickteller: {
              bankCode: "090325",
            },
            test_transfer: {
              bankCode: "090325",
            },
            wema: {
              bankCode: "090325",
            },
          }),
        },
        {
          id: 99,
          name: "Contec Global Infotech Limited (NowNow)",
          code: "100032",
          nibss_bank_code: "100032",
          slug: "contec-global",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100032",
            },
            monnify: {
              bankCode: "100032",
            },
            nibss: {
              bankCode: "100032",
            },
            providus: {
              bankCode: "100032",
            },
            quickteller: {
              bankCode: "525",
            },
            test_transfer: {
              bankCode: "100032",
            },
            wema: {
              bankCode: "100032",
            },
          }),
        },
        {
          id: 100,
          name: "FCMB Easy Account",
          code: "100031",
          nibss_bank_code: "100031",
          slug: "fcmb-easy-account",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100031",
            },
            monnify: {
              bankCode: "100031",
            },
            nibss: {
              bankCode: "100031",
            },
            providus: {
              bankCode: "100031",
            },
            quickteller: {
              bankCode: "100031",
            },
            test_transfer: {
              bankCode: "100031",
            },
            wema: {
              bankCode: "100031",
            },
          }),
        },
        {
          id: 101,
          name: "Innovectives Kesh",
          code: "100029",
          nibss_bank_code: "100029",
          slug: "innovectives-kesh",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100029",
            },
            monnify: {
              bankCode: "100029",
            },
            nibss: {
              bankCode: "100029",
            },
            providus: {
              bankCode: "100029",
            },
            quickteller: {
              bankCode: "100029",
            },
            test_transfer: {
              bankCode: "100029",
            },
            wema: {
              bankCode: "100029",
            },
          }),
        },
        {
          id: 102,
          name: "Trustbond Mortgage Bank",
          code: "090005",
          nibss_bank_code: "090005",
          slug: "trustbond-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090005",
            },
            monnify: {
              bankCode: "090005",
            },
            nibss: {
              bankCode: "090005",
            },
            providus: {
              bankCode: "090005",
            },
            quickteller: {
              bankCode: "090005",
            },
            test_transfer: {
              bankCode: "090005",
            },
            wema: {
              bankCode: "090005",
            },
          }),
        },
        {
          id: 103,
          name: "FBN Mortgages Limited",
          code: "090107",
          nibss_bank_code: "090107",
          slug: "fbn-mortgages-ltd",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090107",
            },
            monnify: {
              bankCode: "090107",
            },
            nibss: {
              bankCode: "090107",
            },
            providus: {
              bankCode: "090107",
            },
            quickteller: {
              bankCode: "090107",
            },
            test_transfer: {
              bankCode: "090107",
            },
            wema: {
              bankCode: "090107",
            },
          }),
        },
        {
          id: 104,
          name: "AG Mortgage Bank",
          code: "100028",
          nibss_bank_code: "100028",
          slug: "ag-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100028",
            },
            monnify: {
              bankCode: "100028",
            },
            nibss: {
              bankCode: "100028",
            },
            providus: {
              bankCode: "100028",
            },
            quickteller: {
              bankCode: "200",
            },
            test_transfer: {
              bankCode: "100028",
            },
            wema: {
              bankCode: "100028",
            },
          }),
        },
        {
          id: 105,
          name: "Gateway Mortgage Bank",
          code: "070009",
          nibss_bank_code: "070009",
          slug: "gateway-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070009",
            },
            monnify: {
              bankCode: "070009",
            },
            nibss: {
              bankCode: "070009",
            },
            providus: {
              bankCode: "070009",
            },
            quickteller: {
              bankCode: "070009",
            },
            test_transfer: {
              bankCode: "070009",
            },
            wema: {
              bankCode: "070009",
            },
          }),
        },
        {
          id: 106,
          name: "Abbey Mortgage Bank",
          code: "070010",
          nibss_bank_code: "070010",
          slug: "abbey-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070010",
            },
            monnify: {
              bankCode: "070010",
            },
            nibss: {
              bankCode: "070010",
            },
            providus: {
              bankCode: "070010",
            },
            quickteller: {
              bankCode: "130",
            },
            test_transfer: {
              bankCode: "070010",
            },
            wema: {
              bankCode: "070010",
            },
          }),
        },
        {
          id: 107,
          name: "Refuge Mortgage Bank",
          code: "070011",
          nibss_bank_code: "070011",
          slug: "refuge-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070011",
            },
            monnify: {
              bankCode: "070011",
            },
            nibss: {
              bankCode: "070011",
            },
            providus: {
              bankCode: "070011",
            },
            quickteller: {
              bankCode: "070011",
            },
            test_transfer: {
              bankCode: "070011",
            },
            wema: {
              bankCode: "070011",
            },
          }),
        },
        {
          id: 108,
          name: "Lagos Building Investment Company",
          code: "070012",
          nibss_bank_code: "070012",
          slug: "lagos-building",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070012",
            },
            monnify: {
              bankCode: "070012",
            },
            nibss: {
              bankCode: "070012",
            },
            providus: {
              bankCode: "070012",
            },
            quickteller: {
              bankCode: "070012",
            },
            test_transfer: {
              bankCode: "070012",
            },
            wema: {
              bankCode: "070012",
            },
          }),
        },
        {
          id: 109,
          name: "Platinum Mortgage Bank",
          code: "070013",
          nibss_bank_code: "070013",
          slug: "platinum-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070013",
            },
            monnify: {
              bankCode: "070013",
            },
            nibss: {
              bankCode: "070013",
            },
            providus: {
              bankCode: "070013",
            },
            quickteller: {
              bankCode: "070013",
            },
            test_transfer: {
              bankCode: "070013",
            },
            wema: {
              bankCode: "070013",
            },
          }),
        },
        {
          id: 110,
          name: "First Generation Mortgage Bank",
          code: "070014",
          nibss_bank_code: "070014",
          slug: "first-gen-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070014",
            },
            monnify: {
              bankCode: "070014",
            },
            nibss: {
              bankCode: "070014",
            },
            providus: {
              bankCode: "070014",
            },
            quickteller: {
              bankCode: "FGM",
            },
            test_transfer: {
              bankCode: "070014",
            },
            wema: {
              bankCode: "070014",
            },
          }),
        },
        {
          id: 111,
          name: "Brent Mortgage Bank",
          code: "070015",
          nibss_bank_code: "070015",
          slug: "brent-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070015",
            },
            monnify: {
              bankCode: "070015",
            },
            nibss: {
              bankCode: "070015",
            },
            providus: {
              bankCode: "070015",
            },
            quickteller: {
              bankCode: "070015",
            },
            test_transfer: {
              bankCode: "070015",
            },
            wema: {
              bankCode: "070015",
            },
          }),
        },
        {
          id: 112,
          name: "Infinity Trust Mortgage Bank",
          code: "070016",
          nibss_bank_code: "070016",
          slug: "infinity-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070016",
            },
            monnify: {
              bankCode: "070016",
            },
            nibss: {
              bankCode: "070016",
            },
            providus: {
              bankCode: "070016",
            },
            quickteller: {
              bankCode: "070016",
            },
            test_transfer: {
              bankCode: "070016",
            },
            wema: {
              bankCode: "070016",
            },
          }),
        },
        {
          id: 113,
          name: "Haggai Mortgage Bank Limited",
          code: "070017",
          nibss_bank_code: "070017",
          slug: "haggai-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070017",
            },
            monnify: {
              bankCode: "070017",
            },
            nibss: {
              bankCode: "070017",
            },
            providus: {
              bankCode: "070017",
            },
            quickteller: {
              bankCode: "417",
            },
            test_transfer: {
              bankCode: "070017",
            },
            wema: {
              bankCode: "070017",
            },
          }),
        },
        {
          id: 114,
          name: "New Prudential Bank",
          code: "090108",
          nibss_bank_code: "090108",
          slug: "new-prudential",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090108",
            },
            monnify: {
              bankCode: "090108",
            },
            nibss: {
              bankCode: "090108",
            },
            providus: {
              bankCode: "090108",
            },
            quickteller: {
              bankCode: "090108",
            },
            test_transfer: {
              bankCode: "090108",
            },
            wema: {
              bankCode: "090108",
            },
          }),
        },
        {
          id: 115,
          name: "Parralex Microfinance bank",
          code: "090004",
          nibss_bank_code: "090004",
          slug: "parralex-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090004",
            },
            monnify: {
              bankCode: "090004",
            },
            nibss: {
              bankCode: "090004",
            },
            providus: {
              bankCode: "090004",
            },
            quickteller: {
              bankCode: "090004",
            },
            test_transfer: {
              bankCode: "090004",
            },
            wema: {
              bankCode: "090004",
            },
          }),
        },
        {
          id: 116,
          name: "Ekondo MFB",
          code: "090097",
          nibss_bank_code: "090097",
          slug: "ekondo-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090097",
            },
            monnify: {
              bankCode: "090097",
            },
            nibss: {
              bankCode: "090097",
            },
            providus: {
              bankCode: "090097",
            },
            quickteller: {
              bankCode: "098",
            },
            test_transfer: {
              bankCode: "090097",
            },
            wema: {
              bankCode: "090097",
            },
          }),
        },
        {
          id: 117,
          name: "IBILE Microfinance Bank",
          code: "090118",
          nibss_bank_code: "090118",
          slug: "ibile-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090118",
            },
            monnify: {
              bankCode: "51244",
            },
            nibss: {
              bankCode: "090118",
            },
            providus: {
              bankCode: "090118",
            },
            quickteller: {
              bankCode: "090118",
            },
            test_transfer: {
              bankCode: "090118",
            },
            wema: {
              bankCode: "090118",
            },
          }),
        },
        {
          id: 118,
          name: "Ohafia Microfinance Bank",
          code: "090119",
          nibss_bank_code: "090119",
          slug: "ohafia-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090119",
            },
            monnify: {
              bankCode: "090119",
            },
            nibss: {
              bankCode: "090119",
            },
            providus: {
              bankCode: "090119",
            },
            quickteller: {
              bankCode: "090119",
            },
            test_transfer: {
              bankCode: "090119",
            },
            wema: {
              bankCode: "090119",
            },
          }),
        },
        {
          id: 119,
          name: "Gowans Microfinance Bank",
          code: "090122",
          nibss_bank_code: "090122",
          slug: "gowans-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090122",
            },
            monnify: {
              bankCode: "090122",
            },
            nibss: {
              bankCode: "090122",
            },
            providus: {
              bankCode: "090122",
            },
            quickteller: {
              bankCode: "090122",
            },
            test_transfer: {
              bankCode: "090122",
            },
            wema: {
              bankCode: "090122",
            },
          }),
        },
        {
          id: 120,
          name: "Verite Microfinance Bank",
          code: "090123",
          nibss_bank_code: "090123",
          slug: "verite-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090123",
            },
            monnify: {
              bankCode: "090123",
            },
            nibss: {
              bankCode: "090123",
            },
            providus: {
              bankCode: "090123",
            },
            quickteller: {
              bankCode: "090123",
            },
            test_transfer: {
              bankCode: "090123",
            },
            wema: {
              bankCode: "090123",
            },
          }),
        },
        {
          id: 121,
          name: "Xslnce Microfinance Bank",
          code: "090124",
          nibss_bank_code: "090124",
          slug: "xslnce-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090124",
            },
            monnify: {
              bankCode: "090124",
            },
            nibss: {
              bankCode: "090124",
            },
            providus: {
              bankCode: "090124",
            },
            quickteller: {
              bankCode: "090124",
            },
            test_transfer: {
              bankCode: "090124",
            },
            wema: {
              bankCode: "090124",
            },
          }),
        },
        {
          id: 122,
          name: "Fidfund Microfinance Bank",
          code: "090126",
          nibss_bank_code: "090126",
          slug: "fidfund-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090126",
            },
            monnify: {
              bankCode: "090126",
            },
            nibss: {
              bankCode: "090126",
            },
            providus: {
              bankCode: "090126",
            },
            quickteller: {
              bankCode: "090126",
            },
            test_transfer: {
              bankCode: "090126",
            },
            wema: {
              bankCode: "090126",
            },
          }),
        },
        {
          id: 123,
          name: "BC Kash Microfinance Bank",
          code: "090127",
          nibss_bank_code: "090127",
          slug: "bc-kash-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090127",
            },
            monnify: {
              bankCode: "090127",
            },
            nibss: {
              bankCode: "090127",
            },
            providus: {
              bankCode: "090127",
            },
            quickteller: {
              bankCode: "090127",
            },
            test_transfer: {
              bankCode: "090127",
            },
            wema: {
              bankCode: "090127",
            },
          }),
        },
        {
          id: 124,
          name: "Ndiorah Microfinance Bank",
          code: "090128",
          nibss_bank_code: "090128",
          slug: "ndiorah-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090128",
            },
            monnify: {
              bankCode: "090128",
            },
            nibss: {
              bankCode: "090128",
            },
            providus: {
              bankCode: "090128",
            },
            quickteller: {
              bankCode: "090128",
            },
            test_transfer: {
              bankCode: "090128",
            },
            wema: {
              bankCode: "090128",
            },
          }),
        },
        {
          id: 125,
          name: "FEDERAL UNIVERSITY DUTSE MICROFINANCE BANK",
          code: "090318",
          nibss_bank_code: "090318",
          slug: "fed-uni-duste-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090318",
            },
            monnify: {
              bankCode: "090318",
            },
            nibss: {
              bankCode: "090318",
            },
            providus: {
              bankCode: "090318",
            },
            quickteller: {
              bankCode: "090318",
            },
            test_transfer: {
              bankCode: "090318",
            },
            wema: {
              bankCode: "090318",
            },
          }),
        },
        {
          id: 126,
          name: "Consumer Microfinance Bank",
          code: "090130",
          nibss_bank_code: "090130",
          slug: "consumer-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090130",
            },
            monnify: {
              bankCode: "090130",
            },
            nibss: {
              bankCode: "090130",
            },
            providus: {
              bankCode: "090130",
            },
            quickteller: {
              bankCode: "090130",
            },
            test_transfer: {
              bankCode: "090130",
            },
            wema: {
              bankCode: "090130",
            },
          }),
        },
        {
          id: 127,
          name: "Allworkers Microfinance Bank",
          code: "090131",
          nibss_bank_code: "090131",
          slug: "allworkers-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090131",
            },
            monnify: {
              bankCode: "090131",
            },
            nibss: {
              bankCode: "090131",
            },
            providus: {
              bankCode: "090131",
            },
            quickteller: {
              bankCode: "090131",
            },
            test_transfer: {
              bankCode: "090131",
            },
            wema: {
              bankCode: "090131",
            },
          }),
        },
        {
          id: 128,
          name: "Richway Microfinance Bank",
          code: "090132",
          nibss_bank_code: "090132",
          slug: "richway-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090132",
            },
            monnify: {
              bankCode: "090132",
            },
            nibss: {
              bankCode: "090132",
            },
            providus: {
              bankCode: "090132",
            },
            quickteller: {
              bankCode: "090132",
            },
            test_transfer: {
              bankCode: "090132",
            },
            wema: {
              bankCode: "090132",
            },
          }),
        },
        {
          id: 129,
          name: " AL-Barakah Microfinance Bank",
          code: "090133",
          nibss_bank_code: "090133",
          slug: "al-barakah-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090133",
            },
            monnify: {
              bankCode: "090133",
            },
            nibss: {
              bankCode: "090133",
            },
            providus: {
              bankCode: "090133",
            },
            quickteller: {
              bankCode: "090133",
            },
            test_transfer: {
              bankCode: "090133",
            },
            wema: {
              bankCode: "090133",
            },
          }),
        },
        {
          id: 130,
          name: "Accion Microfinance Bank",
          code: "090134",
          nibss_bank_code: "090134",
          slug: "accion-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090134",
            },
            monnify: {
              bankCode: "090134",
            },
            nibss: {
              bankCode: "090134",
            },
            providus: {
              bankCode: "090134",
            },
            quickteller: {
              bankCode: "097",
            },
            test_transfer: {
              bankCode: "090134",
            },
            wema: {
              bankCode: "090134",
            },
          }),
        },
        {
          id: 131,
          name: "Personal Trust Microfinance Bank",
          code: "090135",
          nibss_bank_code: "090135",
          slug: "personal-trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090135",
            },
            monnify: {
              bankCode: "090135",
            },
            nibss: {
              bankCode: "090135",
            },
            providus: {
              bankCode: "090135",
            },
            quickteller: {
              bankCode: "398",
            },
            test_transfer: {
              bankCode: "090135",
            },
            wema: {
              bankCode: "090135",
            },
          }),
        },
        {
          id: 132,
          name: "Microcred Microfinance Bank",
          code: "090136",
          nibss_bank_code: "090136",
          slug: "microcred-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090136",
            },
            monnify: {
              bankCode: "090136",
            },
            nibss: {
              bankCode: "090136",
            },
            providus: {
              bankCode: "090136",
            },
            quickteller: {
              bankCode: "090136",
            },
            test_transfer: {
              bankCode: "090136",
            },
            wema: {
              bankCode: "090136",
            },
          }),
        },
        {
          id: 133,
          name: "PecanTrust Microfinance Bank",
          code: "090137",
          nibss_bank_code: "090137",
          slug: "pecanTrust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090137",
            },
            monnify: {
              bankCode: "090137",
            },
            nibss: {
              bankCode: "090137",
            },
            providus: {
              bankCode: "090137",
            },
            quickteller: {
              bankCode: "090137",
            },
            test_transfer: {
              bankCode: "090137",
            },
            wema: {
              bankCode: "090137",
            },
          }),
        },
        {
          id: 134,
          name: "Royal Exchange Microfinance Bank",
          code: "090138",
          nibss_bank_code: "090138",
          slug: "royal-exchange-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090138",
            },
            monnify: {
              bankCode: "090138",
            },
            nibss: {
              bankCode: "090138",
            },
            providus: {
              bankCode: "090138",
            },
            quickteller: {
              bankCode: "090138",
            },
            test_transfer: {
              bankCode: "090138",
            },
            wema: {
              bankCode: "090138",
            },
          }),
        },
        {
          id: 135,
          name: "Visa Microfinance Bank",
          code: "090139",
          nibss_bank_code: "090139",
          slug: "visa-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090139",
            },
            monnify: {
              bankCode: "090139",
            },
            nibss: {
              bankCode: "090139",
            },
            providus: {
              bankCode: "090139",
            },
            quickteller: {
              bankCode: "090139",
            },
            test_transfer: {
              bankCode: "090139",
            },
            wema: {
              bankCode: "090139",
            },
          }),
        },
        {
          id: 136,
          name: "Chikum Microfinance Bank",
          code: "090141",
          nibss_bank_code: "090141",
          slug: "chikum-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090141",
            },
            monnify: {
              bankCode: "090141",
            },
            nibss: {
              bankCode: "090141",
            },
            providus: {
              bankCode: "090141",
            },
            quickteller: {
              bankCode: "090141",
            },
            test_transfer: {
              bankCode: "090141",
            },
            wema: {
              bankCode: "090141",
            },
          }),
        },
        {
          id: 137,
          name: "Yes Microfinance Bank",
          code: "090142",
          nibss_bank_code: "090142",
          slug: "yes-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090142",
            },
            monnify: {
              bankCode: "090142",
            },
            nibss: {
              bankCode: "090142",
            },
            providus: {
              bankCode: "090142",
            },
            quickteller: {
              bankCode: "090142",
            },
            test_transfer: {
              bankCode: "090142",
            },
            wema: {
              bankCode: "090142",
            },
          }),
        },
        {
          id: 138,
          name: "Apeks Microfinance Bank",
          code: "090143",
          nibss_bank_code: "090143",
          slug: "apeks-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090143",
            },
            monnify: {
              bankCode: "090143",
            },
            nibss: {
              bankCode: "090143",
            },
            providus: {
              bankCode: "090143",
            },
            quickteller: {
              bankCode: "090143",
            },
            test_transfer: {
              bankCode: "090143",
            },
            wema: {
              bankCode: "090143",
            },
          }),
        },
        {
          id: 139,
          name: "CIT Microfinance Bank",
          code: "090144",
          nibss_bank_code: "090144",
          slug: "cit-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090144",
            },
            monnify: {
              bankCode: "090144",
            },
            nibss: {
              bankCode: "090144",
            },
            providus: {
              bankCode: "090144",
            },
            quickteller: {
              bankCode: "090144",
            },
            test_transfer: {
              bankCode: "090144",
            },
            wema: {
              bankCode: "090144",
            },
          }),
        },
        {
          id: 140,
          name: "Fullrange Microfinance Bank",
          code: "090145",
          nibss_bank_code: "090145",
          slug: "fullrange-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090145",
            },
            monnify: {
              bankCode: "090145",
            },
            nibss: {
              bankCode: "090145",
            },
            providus: {
              bankCode: "090145",
            },
            quickteller: {
              bankCode: "090145",
            },
            test_transfer: {
              bankCode: "090145",
            },
            wema: {
              bankCode: "090145",
            },
          }),
        },
        {
          id: 141,
          name: "Trident Microfinance Bank",
          code: "090146",
          nibss_bank_code: "090146",
          slug: "trident-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090146",
            },
            monnify: {
              bankCode: "090146",
            },
            nibss: {
              bankCode: "090146",
            },
            providus: {
              bankCode: "090146",
            },
            quickteller: {
              bankCode: "090146",
            },
            test_transfer: {
              bankCode: "090146",
            },
            wema: {
              bankCode: "090146",
            },
          }),
        },
        {
          id: 142,
          name: "Hackman Microfinance Bank",
          code: "090147",
          nibss_bank_code: "090147",
          slug: "hackman-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090147",
            },
            monnify: {
              bankCode: "51251",
            },
            nibss: {
              bankCode: "090147",
            },
            providus: {
              bankCode: "090147",
            },
            quickteller: {
              bankCode: "090147",
            },
            test_transfer: {
              bankCode: "090147",
            },
            wema: {
              bankCode: "090147",
            },
          }),
        },
        {
          id: 143,
          name: "Bowen Microfinance Bank",
          code: "090148",
          nibss_bank_code: "090148",
          slug: "bowen-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090148",
            },
            monnify: {
              bankCode: "50931",
            },
            nibss: {
              bankCode: "090148",
            },
            providus: {
              bankCode: "090148",
            },
            quickteller: {
              bankCode: "350",
            },
            test_transfer: {
              bankCode: "090148",
            },
            wema: {
              bankCode: "090148",
            },
          }),
        },
        {
          id: 144,
          name: "IRL Microfinance Bank",
          code: "090149",
          nibss_bank_code: "090149",
          slug: "irl-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090149",
            },
            monnify: {
              bankCode: "090149",
            },
            nibss: {
              bankCode: "090149",
            },
            providus: {
              bankCode: "090149",
            },
            quickteller: {
              bankCode: "090149",
            },
            test_transfer: {
              bankCode: "090149",
            },
            wema: {
              bankCode: "090149",
            },
          }),
        },
        {
          id: 145,
          name: "Virtue Microfinance Bank",
          code: "090150",
          nibss_bank_code: "090150",
          slug: "virtue-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090150",
            },
            monnify: {
              bankCode: "090150",
            },
            nibss: {
              bankCode: "090150",
            },
            providus: {
              bankCode: "090150",
            },
            quickteller: {
              bankCode: "090150",
            },
            test_transfer: {
              bankCode: "090150",
            },
            wema: {
              bankCode: "090150",
            },
          }),
        },
        {
          id: 146,
          name: "Mutual Trust Microfinance Bank",
          code: "090151",
          nibss_bank_code: "090151",
          slug: "mutual-trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090151",
            },
            monnify: {
              bankCode: "090151",
            },
            nibss: {
              bankCode: "090151",
            },
            providus: {
              bankCode: "090151",
            },
            quickteller: {
              bankCode: "433",
            },
            test_transfer: {
              bankCode: "090151",
            },
            wema: {
              bankCode: "090151",
            },
          }),
        },
        {
          id: 147,
          name: "Nagarta Microfinance Bank",
          code: "090152",
          nibss_bank_code: "090152",
          slug: "nagarta-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090152",
            },
            monnify: {
              bankCode: "090152",
            },
            nibss: {
              bankCode: "090152",
            },
            providus: {
              bankCode: "090152",
            },
            quickteller: {
              bankCode: "090152",
            },
            test_transfer: {
              bankCode: "090152",
            },
            wema: {
              bankCode: "090152",
            },
          }),
        },
        {
          id: 148,
          name: "FFS Microfinance Bank",
          code: "090153",
          nibss_bank_code: "090153",
          slug: "ffs-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090153",
            },
            monnify: {
              bankCode: "090153",
            },
            nibss: {
              bankCode: "090153",
            },
            providus: {
              bankCode: "090153",
            },
            quickteller: {
              bankCode: "090153",
            },
            test_transfer: {
              bankCode: "090153",
            },
            wema: {
              bankCode: "090153",
            },
          }),
        },
        {
          id: 149,
          name: "CEMCS Microfinance Bank",
          code: "090154",
          nibss_bank_code: "090154",
          slug: "cems-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090154",
            },
            monnify: {
              bankCode: "50823",
            },
            nibss: {
              bankCode: "090154",
            },
            providus: {
              bankCode: "090154",
            },
            quickteller: {
              bankCode: "090154",
            },
            test_transfer: {
              bankCode: "090154",
            },
            wema: {
              bankCode: "090154",
            },
          }),
        },
        {
          id: 150,
          name: "La Fayette Microfinance Bank",
          code: "090155",
          nibss_bank_code: "090155",
          slug: "la-fayette-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090155",
            },
            monnify: {
              bankCode: "090155",
            },
            nibss: {
              bankCode: "090155",
            },
            providus: {
              bankCode: "090155",
            },
            quickteller: {
              bankCode: "411",
            },
            test_transfer: {
              bankCode: "090155",
            },
            wema: {
              bankCode: "090155",
            },
          }),
        },
        {
          id: 151,
          name: "e-Barcs Microfinance Bank",
          code: "090156",
          nibss_bank_code: "090156",
          slug: "e-barcs-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090156",
            },
            monnify: {
              bankCode: "090156",
            },
            nibss: {
              bankCode: "090156",
            },
            providus: {
              bankCode: "090156",
            },
            quickteller: {
              bankCode: "090156",
            },
            test_transfer: {
              bankCode: "090156",
            },
            wema: {
              bankCode: "090156",
            },
          }),
        },
        {
          id: 152,
          name: "Infinity Microfinance Bank",
          code: "090157",
          nibss_bank_code: "090157",
          slug: "infinity-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090157",
            },
            monnify: {
              bankCode: "50457",
            },
            nibss: {
              bankCode: "090157",
            },
            providus: {
              bankCode: "090157",
            },
            quickteller: {
              bankCode: "090157",
            },
            test_transfer: {
              bankCode: "090157",
            },
            wema: {
              bankCode: "090157",
            },
          }),
        },
        {
          id: 153,
          name: "Futo Microfinance Bank",
          code: "090158",
          nibss_bank_code: "090158",
          slug: "futo-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090158",
            },
            monnify: {
              bankCode: "090158",
            },
            nibss: {
              bankCode: "090158",
            },
            providus: {
              bankCode: "090158",
            },
            quickteller: {
              bankCode: "090158",
            },
            test_transfer: {
              bankCode: "090158",
            },
            wema: {
              bankCode: "090158",
            },
          }),
        },
        {
          id: 154,
          name: "Credit Afrique Microfinance Bank",
          code: "090159",
          nibss_bank_code: "090159",
          slug: "credit-afrique-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090159",
            },
            monnify: {
              bankCode: "090159",
            },
            nibss: {
              bankCode: "090159",
            },
            providus: {
              bankCode: "090159",
            },
            quickteller: {
              bankCode: "090159",
            },
            test_transfer: {
              bankCode: "090159",
            },
            wema: {
              bankCode: "090159",
            },
          }),
        },
        {
          id: 155,
          name: "Addosser Microfinance Bank",
          code: "090160",
          nibss_bank_code: "090160",
          slug: "addosser-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090160",
            },
            monnify: {
              bankCode: "090160",
            },
            nibss: {
              bankCode: "090160",
            },
            providus: {
              bankCode: "090160",
            },
            quickteller: {
              bankCode: "090160",
            },
            test_transfer: {
              bankCode: "090160",
            },
            wema: {
              bankCode: "090160",
            },
          }),
        },
        {
          id: 156,
          name: "Okpoga Microfinance Bank",
          code: "090161",
          nibss_bank_code: "090161",
          slug: "okpoga-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090161",
            },
            monnify: {
              bankCode: "090161",
            },
            nibss: {
              bankCode: "090161",
            },
            providus: {
              bankCode: "090161",
            },
            quickteller: {
              bankCode: "090161",
            },
            test_transfer: {
              bankCode: "090161",
            },
            wema: {
              bankCode: "090161",
            },
          }),
        },
        {
          id: 157,
          name: "Stanford Microfinance Bak",
          code: "090162",
          nibss_bank_code: "090162",
          slug: "stanford-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090162",
            },
            monnify: {
              bankCode: "090162",
            },
            nibss: {
              bankCode: "090162",
            },
            providus: {
              bankCode: "090162",
            },
            quickteller: {
              bankCode: "090162",
            },
            test_transfer: {
              bankCode: "090162",
            },
            wema: {
              bankCode: "090162",
            },
          }),
        },
        {
          id: 158,
          name: "First Royal Microfinance Bank",
          code: "090164",
          nibss_bank_code: "090164",
          slug: "first-royal-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090164",
            },
            monnify: {
              bankCode: "090164",
            },
            nibss: {
              bankCode: "090164",
            },
            providus: {
              bankCode: "090164",
            },
            quickteller: {
              bankCode: "376",
            },
            test_transfer: {
              bankCode: "090164",
            },
            wema: {
              bankCode: "090164",
            },
          }),
        },
        {
          id: 159,
          name: "Petra Microfinance Bank",
          code: "090165",
          nibss_bank_code: "090165",
          slug: "petra-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090165",
            },
            monnify: {
              bankCode: "50746",
            },
            nibss: {
              bankCode: "090165",
            },
            providus: {
              bankCode: "090165",
            },
            quickteller: {
              bankCode: "090165",
            },
            test_transfer: {
              bankCode: "090165",
            },
            wema: {
              bankCode: "090165",
            },
          }),
        },
        {
          id: 160,
          name: "Eso-E Microfinance Bank",
          code: "090166",
          nibss_bank_code: "090166",
          slug: "eso-e-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090166",
            },
            monnify: {
              bankCode: "090166",
            },
            nibss: {
              bankCode: "090166",
            },
            providus: {
              bankCode: "090166",
            },
            quickteller: {
              bankCode: "090166",
            },
            test_transfer: {
              bankCode: "090166",
            },
            wema: {
              bankCode: "090166",
            },
          }),
        },
        {
          id: 161,
          name: "Daylight Microfinance Bank",
          code: "090167",
          nibss_bank_code: "090167",
          slug: "daylight-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090167",
            },
            monnify: {
              bankCode: "090167",
            },
            nibss: {
              bankCode: "090167",
            },
            providus: {
              bankCode: "090167",
            },
            quickteller: {
              bankCode: "090167",
            },
            test_transfer: {
              bankCode: "090167",
            },
            wema: {
              bankCode: "090167",
            },
          }),
        },
        {
          id: 162,
          name: "Gashua Microfinance Bank",
          code: "090168",
          nibss_bank_code: "090168",
          slug: "gashua-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090168",
            },
            monnify: {
              bankCode: "090168",
            },
            nibss: {
              bankCode: "090168",
            },
            providus: {
              bankCode: "090168",
            },
            quickteller: {
              bankCode: "090168",
            },
            test_transfer: {
              bankCode: "090168",
            },
            wema: {
              bankCode: "090168",
            },
          }),
        },
        {
          id: 163,
          name: "Alpha Kapital Microfinance Bank",
          code: "090169",
          nibss_bank_code: "090169",
          slug: "alpha-kapital-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090169",
            },
            monnify: {
              bankCode: "090169",
            },
            nibss: {
              bankCode: "090169",
            },
            providus: {
              bankCode: "090169",
            },
            quickteller: {
              bankCode: "090169",
            },
            test_transfer: {
              bankCode: "090169",
            },
            wema: {
              bankCode: "090169",
            },
          }),
        },
        {
          id: 164,
          name: "Astrapolaris Microfinance Bank",
          code: "090172",
          nibss_bank_code: "090172",
          slug: "astrapolaris-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090172",
            },
            monnify: {
              bankCode: "090172",
            },
            nibss: {
              bankCode: "090172",
            },
            providus: {
              bankCode: "090172",
            },
            quickteller: {
              bankCode: "345",
            },
            test_transfer: {
              bankCode: "090172",
            },
            wema: {
              bankCode: "090172",
            },
          }),
        },
        {
          id: 165,
          name: "Reliance Microfinance Bank",
          code: "090173",
          nibss_bank_code: "090173",
          slug: "reliance-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090173",
            },
            monnify: {
              bankCode: "090173",
            },
            nibss: {
              bankCode: "090173",
            },
            providus: {
              bankCode: "090173",
            },
            quickteller: {
              bankCode: "090173",
            },
            test_transfer: {
              bankCode: "090173",
            },
            wema: {
              bankCode: "090173",
            },
          }),
        },
        {
          id: 166,
          name: "Malachy Microfinance Bank",
          code: "090174",
          nibss_bank_code: "090174",
          slug: "malachy-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090174",
            },
            monnify: {
              bankCode: "090174",
            },
            nibss: {
              bankCode: "090174",
            },
            providus: {
              bankCode: "090174",
            },
            quickteller: {
              bankCode: "090174",
            },
            test_transfer: {
              bankCode: "090174",
            },
            wema: {
              bankCode: "090174",
            },
          }),
        },
        {
          id: 167,
          name: "Bosak Microfinance Bank",
          code: "090176",
          nibss_bank_code: "090176",
          slug: "bosak-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090176",
            },
            monnify: {
              bankCode: "090176",
            },
            nibss: {
              bankCode: "090176",
            },
            providus: {
              bankCode: "090176",
            },
            quickteller: {
              bankCode: "090176",
            },
            test_transfer: {
              bankCode: "090176",
            },
            wema: {
              bankCode: "090176",
            },
          }),
        },
        {
          id: 168,
          name: "Lapo Microfinance Bank",
          code: "090177",
          nibss_bank_code: "090177",
          slug: "lapo-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090177",
            },
            monnify: {
              bankCode: "090177",
            },
            nibss: {
              bankCode: "090177",
            },
            providus: {
              bankCode: "090177",
            },
            quickteller: {
              bankCode: "331",
            },
            test_transfer: {
              bankCode: "090177",
            },
            wema: {
              bankCode: "090177",
            },
          }),
        },
        {
          id: 169,
          name: "GreenBank Microfinance Bank",
          code: "090178",
          nibss_bank_code: "090178",
          slug: "greenbank-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090178",
            },
            monnify: {
              bankCode: "090178",
            },
            nibss: {
              bankCode: "090178",
            },
            providus: {
              bankCode: "090178",
            },
            quickteller: {
              bankCode: "060",
            },
            test_transfer: {
              bankCode: "090178",
            },
            wema: {
              bankCode: "090178",
            },
          }),
        },
        {
          id: 170,
          name: "FAST Microfinance Bank",
          code: "090179",
          nibss_bank_code: "090179",
          slug: "fast-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090179",
            },
            monnify: {
              bankCode: "090179",
            },
            nibss: {
              bankCode: "090179",
            },
            providus: {
              bankCode: "090179",
            },
            quickteller: {
              bankCode: "381",
            },
            test_transfer: {
              bankCode: "090179",
            },
            wema: {
              bankCode: "090179",
            },
          }),
        },
        {
          id: 171,
          name: "Baines Credit Microfinance Bank",
          code: "090188",
          nibss_bank_code: "090188",
          slug: "baines-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090188",
            },
            monnify: {
              bankCode: "090188",
            },
            nibss: {
              bankCode: "090188",
            },
            providus: {
              bankCode: "090188",
            },
            quickteller: {
              bankCode: "090188",
            },
            test_transfer: {
              bankCode: "090188",
            },
            wema: {
              bankCode: "090188",
            },
          }),
        },
        {
          id: 172,
          name: "Esan Microfinance Bank",
          code: "090189",
          nibss_bank_code: "090189",
          slug: "esan-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090189",
            },
            monnify: {
              bankCode: "090189",
            },
            nibss: {
              bankCode: "090189",
            },
            providus: {
              bankCode: "090189",
            },
            quickteller: {
              bankCode: "090189",
            },
            test_transfer: {
              bankCode: "090189",
            },
            wema: {
              bankCode: "090189",
            },
          }),
        },
        {
          id: 173,
          name: "Mutual Benefits Microfinance Bank",
          code: "090190",
          nibss_bank_code: "090190",
          slug: "mutual-benefits-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090190",
            },
            monnify: {
              bankCode: "090190",
            },
            nibss: {
              bankCode: "090190",
            },
            providus: {
              bankCode: "090190",
            },
            quickteller: {
              bankCode: "090190",
            },
            test_transfer: {
              bankCode: "090190",
            },
            wema: {
              bankCode: "090190",
            },
          }),
        },
        {
          id: 174,
          name: "KCMB Microfinance Bank",
          code: "090191",
          nibss_bank_code: "090191",
          slug: "kcmb-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090191",
            },
            monnify: {
              bankCode: "090191",
            },
            nibss: {
              bankCode: "090191",
            },
            providus: {
              bankCode: "090191",
            },
            quickteller: {
              bankCode: "090191",
            },
            test_transfer: {
              bankCode: "090191",
            },
            wema: {
              bankCode: "090191",
            },
          }),
        },
        {
          id: 175,
          name: "Midland Microfinance Bank",
          code: "090192",
          nibss_bank_code: "090192",
          slug: "midland-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090192",
            },
            monnify: {
              bankCode: "090192",
            },
            nibss: {
              bankCode: "090192",
            },
            providus: {
              bankCode: "090192",
            },
            quickteller: {
              bankCode: "333",
            },
            test_transfer: {
              bankCode: "090192",
            },
            wema: {
              bankCode: "090192",
            },
          }),
        },
        {
          id: 176,
          name: "Unical Microfinance Bank",
          code: "090193",
          nibss_bank_code: "090193",
          slug: "unical-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090193",
            },
            monnify: {
              bankCode: "50871",
            },
            nibss: {
              bankCode: "090193",
            },
            providus: {
              bankCode: "090193",
            },
            quickteller: {
              bankCode: "095",
            },
            test_transfer: {
              bankCode: "090193",
            },
            wema: {
              bankCode: "090193",
            },
          }),
        },
        {
          id: 177,
          name: "NIRSAL Microfinance Bank",
          code: "090194",
          nibss_bank_code: "090194",
          slug: "nirsal-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090194",
            },
            monnify: {
              bankCode: "090194",
            },
            nibss: {
              bankCode: "090194",
            },
            providus: {
              bankCode: "090194",
            },
            quickteller: {
              bankCode: "090194",
            },
            test_transfer: {
              bankCode: "090194",
            },
            wema: {
              bankCode: "090194",
            },
          }),
        },
        {
          id: 178,
          name: "Grooming Microfinance Bank",
          code: "090195",
          nibss_bank_code: "090195",
          slug: "grooming-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090195",
            },
            monnify: {
              bankCode: "090195",
            },
            nibss: {
              bankCode: "090195",
            },
            providus: {
              bankCode: "090195",
            },
            quickteller: {
              bankCode: "430",
            },
            test_transfer: {
              bankCode: "090195",
            },
            wema: {
              bankCode: "090195",
            },
          }),
        },
        {
          id: 179,
          name: "Pennywise Microfinance Bank",
          code: "090196",
          nibss_bank_code: "090196",
          slug: "pennywise-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090196",
            },
            monnify: {
              bankCode: "090196",
            },
            nibss: {
              bankCode: "090196",
            },
            providus: {
              bankCode: "090196",
            },
            quickteller: {
              bankCode: "090196",
            },
            test_transfer: {
              bankCode: "090196",
            },
            wema: {
              bankCode: "090196",
            },
          }),
        },
        {
          id: 180,
          name: "ABU Microfinance Bank",
          code: "090197",
          nibss_bank_code: "090197",
          slug: "abu-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090197",
            },
            monnify: {
              bankCode: "090197",
            },
            nibss: {
              bankCode: "090197",
            },
            providus: {
              bankCode: "090197",
            },
            quickteller: {
              bankCode: "362",
            },
            test_transfer: {
              bankCode: "090197",
            },
            wema: {
              bankCode: "090197",
            },
          }),
        },
        {
          id: 181,
          name: "RenMoney Microfinance Bank",
          code: "090198",
          nibss_bank_code: "090198",
          slug: "renmoney-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090198",
            },
            monnify: {
              bankCode: "090198",
            },
            nibss: {
              bankCode: "090198",
            },
            providus: {
              bankCode: "090198",
            },
            quickteller: {
              bankCode: "521",
            },
            test_transfer: {
              bankCode: "090198",
            },
            wema: {
              bankCode: "090198",
            },
          }),
        },
        {
          id: 182,
          name: "New Dawn Microfinance Bank",
          code: "090205",
          nibss_bank_code: "090205",
          slug: "new-dawn-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090205",
            },
            monnify: {
              bankCode: "090205",
            },
            nibss: {
              bankCode: "090205",
            },
            providus: {
              bankCode: "090205",
            },
            quickteller: {
              bankCode: "090205",
            },
            test_transfer: {
              bankCode: "090205",
            },
            wema: {
              bankCode: "090205",
            },
          }),
        },
        {
          id: 183,
          name: "UNN MFB",
          code: "090251",
          nibss_bank_code: "090251",
          slug: "unn-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090251",
            },
            monnify: {
              bankCode: "090251",
            },
            nibss: {
              bankCode: "090251",
            },
            providus: {
              bankCode: "090251",
            },
            quickteller: {
              bankCode: "090251",
            },
            test_transfer: {
              bankCode: "090251",
            },
            wema: {
              bankCode: "090251",
            },
          }),
        },
        {
          id: 184,
          name: "Imo State Microfinance Bank",
          code: "090258",
          nibss_bank_code: "090258",
          slug: "imo-state-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090258",
            },
            monnify: {
              bankCode: "090258",
            },
            nibss: {
              bankCode: "090258",
            },
            providus: {
              bankCode: "090258",
            },
            quickteller: {
              bankCode: "447",
            },
            test_transfer: {
              bankCode: "090258",
            },
            wema: {
              bankCode: "090258",
            },
          }),
        },
        {
          id: 185,
          name: "Alekun Microfinance Bank",
          code: "090259",
          nibss_bank_code: "090259",
          slug: "alekun-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090259",
            },
            monnify: {
              bankCode: "090259",
            },
            nibss: {
              bankCode: "090259",
            },
            providus: {
              bankCode: "090259",
            },
            quickteller: {
              bankCode: "090259",
            },
            test_transfer: {
              bankCode: "090259",
            },
            wema: {
              bankCode: "090259",
            },
          }),
        },
        {
          id: 186,
          name: "Above Only Microfinance Bank",
          code: "090260",
          nibss_bank_code: "090260",
          slug: "above-only-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090260",
            },
            monnify: {
              bankCode: "090260",
            },
            nibss: {
              bankCode: "090260",
            },
            providus: {
              bankCode: "090260",
            },
            quickteller: {
              bankCode: "485",
            },
            test_transfer: {
              bankCode: "090260",
            },
            wema: {
              bankCode: "090260",
            },
          }),
        },
        {
          id: 187,
          name: "Quickfund Microfinance Bank",
          code: "090261",
          nibss_bank_code: "090261",
          slug: "quickfund-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090261",
            },
            monnify: {
              bankCode: "090261",
            },
            nibss: {
              bankCode: "090261",
            },
            providus: {
              bankCode: "090261",
            },
            quickteller: {
              bankCode: "090261",
            },
            test_transfer: {
              bankCode: "090261",
            },
            wema: {
              bankCode: "090261",
            },
          }),
        },
        {
          id: 188,
          name: "Stellas Microfinance Bank",
          code: "090262",
          nibss_bank_code: "090262",
          slug: "stellas-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090262",
            },
            monnify: {
              bankCode: "090262",
            },
            nibss: {
              bankCode: "090262",
            },
            providus: {
              bankCode: "090262",
            },
            quickteller: {
              bankCode: "090262",
            },
            test_transfer: {
              bankCode: "090262",
            },
            wema: {
              bankCode: "090262",
            },
          }),
        },
        {
          id: 189,
          name: "Navy Microfinance Bank",
          code: "090263",
          nibss_bank_code: "090263",
          slug: "navy-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090263",
            },
            monnify: {
              bankCode: "090263",
            },
            nibss: {
              bankCode: "090263",
            },
            providus: {
              bankCode: "090263",
            },
            quickteller: {
              bankCode: "090263",
            },
            test_transfer: {
              bankCode: "090263",
            },
            wema: {
              bankCode: "090263",
            },
          }),
        },
        {
          id: 190,
          name: "Auchi Microfinance Bank",
          code: "090264",
          nibss_bank_code: "090264",
          slug: "auchi-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090264",
            },
            monnify: {
              bankCode: "090264",
            },
            nibss: {
              bankCode: "090264",
            },
            providus: {
              bankCode: "090264",
            },
            quickteller: {
              bankCode: "490",
            },
            test_transfer: {
              bankCode: "090264",
            },
            wema: {
              bankCode: "090264",
            },
          }),
        },
        {
          id: 191,
          name: "Lovonus Microfinance Bank",
          code: "090265",
          nibss_bank_code: "090265",
          slug: "lovonus-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090265",
            },
            monnify: {
              bankCode: "090265",
            },
            nibss: {
              bankCode: "090265",
            },
            providus: {
              bankCode: "090265",
            },
            quickteller: {
              bankCode: "090265",
            },
            test_transfer: {
              bankCode: "090265",
            },
            wema: {
              bankCode: "090265",
            },
          }),
        },
        {
          id: 192,
          name: "Uniben Microfinance Bank",
          code: "090266",
          nibss_bank_code: "090266",
          slug: "uniben-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090266",
            },
            monnify: {
              bankCode: "090266",
            },
            nibss: {
              bankCode: "090266",
            },
            providus: {
              bankCode: "090266",
            },
            quickteller: {
              bankCode: "090266",
            },
            test_transfer: {
              bankCode: "090266",
            },
            wema: {
              bankCode: "090266",
            },
          }),
        },
        {
          id: 193,
          name: "Adeyemi College Staff Microfinance Bank",
          code: "090268",
          nibss_bank_code: "090268",
          slug: "adeyemi-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090268",
            },
            monnify: {
              bankCode: "090268",
            },
            nibss: {
              bankCode: "090268",
            },
            providus: {
              bankCode: "090268",
            },
            quickteller: {
              bankCode: "090268",
            },
            test_transfer: {
              bankCode: "090268",
            },
            wema: {
              bankCode: "090268",
            },
          }),
        },
        {
          id: 194,
          name: "Greenville Microfinance Bank",
          code: "090269",
          nibss_bank_code: "090269",
          slug: "greenville-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090269",
            },
            monnify: {
              bankCode: "090269",
            },
            nibss: {
              bankCode: "090269",
            },
            providus: {
              bankCode: "090269",
            },
            quickteller: {
              bankCode: "090269",
            },
            test_transfer: {
              bankCode: "090269",
            },
            wema: {
              bankCode: "090269",
            },
          }),
        },
        {
          id: 195,
          name: "AB Microfinance Bank",
          code: "090270",
          nibss_bank_code: "090270",
          slug: "ab-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090270",
            },
            monnify: {
              bankCode: "090270",
            },
            nibss: {
              bankCode: "090270",
            },
            providus: {
              bankCode: "090270",
            },
            quickteller: {
              bankCode: "090270",
            },
            test_transfer: {
              bankCode: "090270",
            },
            wema: {
              bankCode: "090270",
            },
          }),
        },
        {
          id: 196,
          name: "Lavender Microfinance Bank",
          code: "090271",
          nibss_bank_code: "090271",
          slug: "lavender-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090271",
            },
            monnify: {
              bankCode: "090271",
            },
            nibss: {
              bankCode: "090271",
            },
            providus: {
              bankCode: "090271",
            },
            quickteller: {
              bankCode: "LVD",
            },
            test_transfer: {
              bankCode: "090271",
            },
            wema: {
              bankCode: "090271",
            },
          }),
        },
        {
          id: 197,
          name: "Olabisi Onabanjo University Microfinance Bank",
          code: "090272",
          nibss_bank_code: "090272",
          slug: "olabisi-onabanjo-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090272",
            },
            monnify: {
              bankCode: "090272",
            },
            nibss: {
              bankCode: "090272",
            },
            providus: {
              bankCode: "090272",
            },
            quickteller: {
              bankCode: "090272",
            },
            test_transfer: {
              bankCode: "090272",
            },
            wema: {
              bankCode: "090272",
            },
          }),
        },
        {
          id: 198,
          name: "Emeralds Microfinance Bank",
          code: "090273",
          nibss_bank_code: "090273",
          slug: "emeral-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090273",
            },
            monnify: {
              bankCode: "090273",
            },
            nibss: {
              bankCode: "090273",
            },
            providus: {
              bankCode: "090273",
            },
            quickteller: {
              bankCode: "090273",
            },
            test_transfer: {
              bankCode: "090273",
            },
            wema: {
              bankCode: "090273",
            },
          }),
        },
        {
          id: 199,
          name: "Trustfund Microfinance Bank",
          code: "090276",
          nibss_bank_code: "090276",
          slug: "trustfund-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090276",
            },
            monnify: {
              bankCode: "090276",
            },
            nibss: {
              bankCode: "090276",
            },
            providus: {
              bankCode: "090276",
            },
            quickteller: {
              bankCode: "373",
            },
            test_transfer: {
              bankCode: "090276",
            },
            wema: {
              bankCode: "090276",
            },
          }),
        },
        {
          id: 200,
          name: "Al-Hayat Microfinance Bank",
          code: "090277",
          nibss_bank_code: "090277",
          slug: "al-hayat-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090277",
            },
            monnify: {
              bankCode: "090277",
            },
            nibss: {
              bankCode: "090277",
            },
            providus: {
              bankCode: "090277",
            },
            quickteller: {
              bankCode: "090277",
            },
            test_transfer: {
              bankCode: "090277",
            },
            wema: {
              bankCode: "090277",
            },
          }),
        },
        {
          id: 201,
          name: "Kegow",
          code: "100015",
          nibss_bank_code: "100015",
          slug: "kegow",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100015",
            },
            monnify: {
              bankCode: "100015",
            },
            nibss: {
              bankCode: "100015",
            },
            providus: {
              bankCode: "100015",
            },
            quickteller: {
              bankCode: "100015",
            },
            test_transfer: {
              bankCode: "100015",
            },
            wema: {
              bankCode: "100015",
            },
          }),
        },
        {
          id: 202,
          name: "Mkudi",
          code: "100011",
          nibss_bank_code: "100011",
          slug: "mkudi",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100011",
            },
            monnify: {
              bankCode: "100011",
            },
            nibss: {
              bankCode: "100011",
            },
            providus: {
              bankCode: "100011",
            },
            quickteller: {
              bankCode: "100011",
            },
            test_transfer: {
              bankCode: "100011",
            },
            wema: {
              bankCode: "100011",
            },
          }),
        },
        {
          id: 203,
          name: "Flutterwave Technology Solutions Limited",
          code: "110002",
          nibss_bank_code: "110002",
          slug: "flutterwave",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "110002",
            },
            monnify: {
              bankCode: "110002",
            },
            nibss: {
              bankCode: "110002",
            },
            providus: {
              bankCode: "110002",
            },
            quickteller: {
              bankCode: "110002",
            },
            test_transfer: {
              bankCode: "110002",
            },
            wema: {
              bankCode: "110002",
            },
          }),
        },
        {
          id: 204,
          name: "NIP Virtual Bank",
          code: "999999",
          nibss_bank_code: "999999",
          slug: "nip-vb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "999999",
            },
            monnify: {
              bankCode: "999999",
            },
            nibss: {
              bankCode: "999999",
            },
            providus: {
              bankCode: "999999",
            },
            quickteller: {
              bankCode: "999999",
            },
            test_transfer: {
              bankCode: "999999",
            },
            wema: {
              bankCode: "999999",
            },
          }),
        },
        {
          id: 205,
          name: "U AND C MFB",
          code: "090315",
          nibss_bank_code: "090315",
          slug: "u-and-c-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090315",
            },
            monnify: {
              bankCode: "090315",
            },
            nibss: {
              bankCode: "090315",
            },
            providus: {
              bankCode: "090315",
            },
            quickteller: {
              bankCode: "090315",
            },
            test_transfer: {
              bankCode: "090315",
            },
            wema: {
              bankCode: "090315",
            },
          }),
        },
        {
          id: 206,
          name: "MAUTECH Microfinance Bank",
          code: "090423",
          nibss_bank_code: "090423",
          slug: "mautech-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090423",
            },
            monnify: {
              bankCode: "090423",
            },
            nibss: {
              bankCode: "090423",
            },
            providus: {
              bankCode: "090423",
            },
            quickteller: {
              bankCode: "090423",
            },
            test_transfer: {
              bankCode: "090423",
            },
            wema: {
              bankCode: "090423",
            },
          }),
        },
        {
          id: 207,
          name: "Greenwich Merchant Bank",
          code: "060004",
          nibss_bank_code: "060004",
          slug: "greenwich-mb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "060004",
            },
            monnify: {
              bankCode: "060004",
            },
            nibss: {
              bankCode: "060004",
            },
            providus: {
              bankCode: "060004",
            },
            quickteller: {
              bankCode: "060004",
            },
            test_transfer: {
              bankCode: "060004",
            },
            wema: {
              bankCode: "060004",
            },
          }),
        },
        {
          id: 208,
          name: "UNAAB MFB",
          code: "090331",
          nibss_bank_code: "090331",
          slug: "unaab-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090331",
            },
            monnify: {
              bankCode: "090331",
            },
            nibss: {
              bankCode: "090331",
            },
            providus: {
              bankCode: "090331",
            },
            quickteller: {
              bankCode: "090331",
            },
            test_transfer: {
              bankCode: "090331",
            },
            wema: {
              bankCode: "090331",
            },
          }),
        },
        {
          id: 209,
          name: "Firmus MFB",
          code: "090366",
          nibss_bank_code: "090366",
          slug: "firmus-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090366",
            },
            monnify: {
              bankCode: "090366",
            },
            nibss: {
              bankCode: "090366",
            },
            providus: {
              bankCode: "090366",
            },
            quickteller: {
              bankCode: "365",
            },
            test_transfer: {
              bankCode: "090366",
            },
            wema: {
              bankCode: "090366",
            },
          }),
        },
        {
          id: 210,
          name: "PALMPAY",
          code: "100033",
          nibss_bank_code: "100033",
          slug: "palmpay",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100033",
            },
            monnify: {
              bankCode: "100033",
            },
            nibss: {
              bankCode: "100033",
            },
            providus: {
              bankCode: "100033",
            },
            quickteller: {
              bankCode: "505",
            },
            test_transfer: {
              bankCode: "100033",
            },
            wema: {
              bankCode: "100033",
            },
          }),
        },
        {
          id: 211,
          name: "Manny Microfinance bank",
          code: "090383",
          nibss_bank_code: "090383",
          slug: "manny-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090383",
            },
            monnify: {
              bankCode: "090383",
            },
            nibss: {
              bankCode: "090383",
            },
            providus: {
              bankCode: "090383",
            },
            quickteller: {
              bankCode: "090383",
            },
            test_transfer: {
              bankCode: "090383",
            },
            wema: {
              bankCode: "090383",
            },
          }),
        },
        {
          id: 212,
          name: "Letshego MFB",
          code: "090420",
          nibss_bank_code: "090420",
          slug: "letshego-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090420",
            },
            monnify: {
              bankCode: "216",
            },
            nibss: {
              bankCode: "090420",
            },
            providus: {
              bankCode: "090420",
            },
            quickteller: {
              bankCode: "427",
            },
            test_transfer: {
              bankCode: "090420",
            },
            wema: {
              bankCode: "090420",
            },
          }),
        },
        {
          id: 213,
          name: "M36",
          code: "100035",
          nibss_bank_code: "100035",
          slug: "m36",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100035",
            },
            monnify: {
              bankCode: "100035",
            },
            nibss: {
              bankCode: "100035",
            },
            providus: {
              bankCode: "100035",
            },
            quickteller: {
              bankCode: "100035",
            },
            test_transfer: {
              bankCode: "100035",
            },
            wema: {
              bankCode: "100035",
            },
          }),
        },
        {
          id: 214,
          name: "Safe Haven MFB",
          code: "090286",
          nibss_bank_code: "090286",
          slug: "safe-haven-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090286",
            },
            monnify: {
              bankCode: "090286",
            },
            nibss: {
              bankCode: "090286",
            },
            providus: {
              bankCode: "090286",
            },
            quickteller: {
              bankCode: "090286",
            },
            test_transfer: {
              bankCode: "090286",
            },
            wema: {
              bankCode: "090286",
            },
          }),
        },
        {
          id: 215,
          name: "Access Yello &amp; Beta",
          code: "100052",
          nibss_bank_code: "100052",
          slug: "access-yellow",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "100052",
            },
            monnify: {
              bankCode: "100052",
            },
            nibss: {
              bankCode: "100052",
            },
            providus: {
              bankCode: "100052",
            },
            quickteller: {
              bankCode: "100052",
            },
            test_transfer: {
              bankCode: "100052",
            },
            wema: {
              bankCode: "100052",
            },
          }),
        },
        {
          id: 216,
          name: "Alert MFB",
          code: "090297",
          nibss_bank_code: "090297",
          slug: "alert-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090297",
            },
            monnify: {
              bankCode: "090297",
            },
            nibss: {
              bankCode: "090297",
            },
            providus: {
              bankCode: "090297",
            },
            quickteller: {
              bankCode: "090297",
            },
            test_transfer: {
              bankCode: "090297",
            },
            wema: {
              bankCode: "090297",
            },
          }),
        },
        {
          id: 217,
          name: "Arise MFB MFB",
          code: "090282",
          nibss_bank_code: "090282",
          slug: "arise-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090282",
            },
            monnify: {
              bankCode: "090282",
            },
            nibss: {
              bankCode: "090282",
            },
            providus: {
              bankCode: "090282",
            },
            quickteller: {
              bankCode: "090282",
            },
            test_transfer: {
              bankCode: "090282",
            },
            wema: {
              bankCode: "090282",
            },
          }),
        },
        {
          id: 218,
          name: "Balogun Gambari MFB",
          code: "090326",
          nibss_bank_code: "090326",
          slug: "balogun-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090326",
            },
            monnify: {
              bankCode: "090326",
            },
            nibss: {
              bankCode: "090326",
            },
            providus: {
              bankCode: "090326",
            },
            quickteller: {
              bankCode: "090326",
            },
            test_transfer: {
              bankCode: "090326",
            },
            wema: {
              bankCode: "090326",
            },
          }),
        },
        {
          id: 219,
          name: "Bayero MICROFINANCE BANK",
          code: "090316",
          nibss_bank_code: "090316",
          slug: "bayero-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090316",
            },
            monnify: {
              bankCode: "090316",
            },
            nibss: {
              bankCode: "090316",
            },
            providus: {
              bankCode: "090316",
            },
            quickteller: {
              bankCode: "090316",
            },
            test_transfer: {
              bankCode: "090316",
            },
            wema: {
              bankCode: "090316",
            },
          }),
        },
        {
          id: 220,
          name: "BIPC MICROFINANCE BANK",
          code: "090336",
          nibss_bank_code: "090336",
          slug: "bipc-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090336",
            },
            monnify: {
              bankCode: "090336",
            },
            nibss: {
              bankCode: "090336",
            },
            providus: {
              bankCode: "090336",
            },
            quickteller: {
              bankCode: "090336",
            },
            test_transfer: {
              bankCode: "090336",
            },
            wema: {
              bankCode: "090336",
            },
          }),
        },
        {
          id: 221,
          name: "BRETHREN MICROFINANCE BANK",
          code: "090293",
          nibss_bank_code: "090293",
          slug: "brethren-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090293",
            },
            monnify: {
              bankCode: "090293",
            },
            nibss: {
              bankCode: "090293",
            },
            providus: {
              bankCode: "090293",
            },
            quickteller: {
              bankCode: "090293",
            },
            test_transfer: {
              bankCode: "090293",
            },
            wema: {
              bankCode: "090293",
            },
          }),
        },
        {
          id: 222,
          name: "Brightway MFB",
          code: "090308",
          nibss_bank_code: "090308",
          slug: "brightway-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090308",
            },
            monnify: {
              bankCode: "090308",
            },
            nibss: {
              bankCode: "090308",
            },
            providus: {
              bankCode: "090308",
            },
            quickteller: {
              bankCode: "090308",
            },
            test_transfer: {
              bankCode: "090308",
            },
            wema: {
              bankCode: "090308",
            },
          }),
        },
        {
          id: 223,
          name: "Eagle Flight MFB",
          code: "090294",
          nibss_bank_code: "090294",
          slug: "eagle-flight-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090294",
            },
            monnify: {
              bankCode: "090294",
            },
            nibss: {
              bankCode: "090294",
            },
            providus: {
              bankCode: "090294",
            },
            quickteller: {
              bankCode: "374",
            },
            test_transfer: {
              bankCode: "090294",
            },
            wema: {
              bankCode: "090294",
            },
          }),
        },
        {
          id: 224,
          name: "Edfin MFB",
          code: "090310",
          nibss_bank_code: "090310",
          slug: "edfin-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090310",
            },
            monnify: {
              bankCode: "090310",
            },
            nibss: {
              bankCode: "090310",
            },
            providus: {
              bankCode: "090310",
            },
            quickteller: {
              bankCode: "090310",
            },
            test_transfer: {
              bankCode: "090310",
            },
            wema: {
              bankCode: "090310",
            },
          }),
        },
        {
          id: 225,
          name: "Evangel MFB",
          code: "090304",
          nibss_bank_code: "090304",
          slug: "evangel-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090304",
            },
            monnify: {
              bankCode: "090304",
            },
            nibss: {
              bankCode: "090304",
            },
            providus: {
              bankCode: "090304",
            },
            quickteller: {
              bankCode: "090304",
            },
            test_transfer: {
              bankCode: "090304",
            },
            wema: {
              bankCode: "090304",
            },
          }),
        },
        {
          id: 226,
          name: "Evergreen MICROFINANCE BANK",
          code: "090332",
          nibss_bank_code: "090332",
          slug: "evergreen-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090332",
            },
            monnify: {
              bankCode: "090332",
            },
            nibss: {
              bankCode: "090332",
            },
            providus: {
              bankCode: "090332",
            },
            quickteller: {
              bankCode: "090332",
            },
            test_transfer: {
              bankCode: "090332",
            },
            wema: {
              bankCode: "090332",
            },
          }),
        },
        {
          id: 227,
          name: "FCT MFB",
          code: "090290",
          nibss_bank_code: "090290",
          slug: "fct-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090290",
            },
            monnify: {
              bankCode: "090290",
            },
            nibss: {
              bankCode: "090290",
            },
            providus: {
              bankCode: "090290",
            },
            quickteller: {
              bankCode: "090290",
            },
            test_transfer: {
              bankCode: "090290",
            },
            wema: {
              bankCode: "090290",
            },
          }),
        },
        {
          id: 228,
          name: "FederalPoly NasarawaMFB",
          code: "090298",
          nibss_bank_code: "090298",
          slug: "federalPoly-nasarawa-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090298",
            },
            monnify: {
              bankCode: "090298",
            },
            nibss: {
              bankCode: "090298",
            },
            providus: {
              bankCode: "090298",
            },
            quickteller: {
              bankCode: "090298",
            },
            test_transfer: {
              bankCode: "090298",
            },
            wema: {
              bankCode: "090298",
            },
          }),
        },
        {
          id: 229,
          name: "First Multiple MFB",
          code: "090163",
          nibss_bank_code: "090163",
          slug: "first-multiple-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090163",
            },
            monnify: {
              bankCode: "090163",
            },
            nibss: {
              bankCode: "090163",
            },
            providus: {
              bankCode: "090163",
            },
            quickteller: {
              bankCode: "090163",
            },
            test_transfer: {
              bankCode: "090163",
            },
            wema: {
              bankCode: "090163",
            },
          }),
        },
        {
          id: 230,
          name: "First Option MFB",
          code: "090285",
          nibss_bank_code: "090285",
          slug: "first-option-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090285",
            },
            monnify: {
              bankCode: "090285",
            },
            nibss: {
              bankCode: "090285",
            },
            providus: {
              bankCode: "090285",
            },
            quickteller: {
              bankCode: "090285",
            },
            test_transfer: {
              bankCode: "090285",
            },
            wema: {
              bankCode: "090285",
            },
          }),
        },
        {
          id: 231,
          name: "Glory MFB",
          code: "090278",
          nibss_bank_code: "090278",
          slug: "glory-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090278",
            },
            monnify: {
              bankCode: "090278",
            },
            nibss: {
              bankCode: "090278",
            },
            providus: {
              bankCode: "090278",
            },
            quickteller: {
              bankCode: "090278",
            },
            test_transfer: {
              bankCode: "090278",
            },
            wema: {
              bankCode: "090278",
            },
          }),
        },
        {
          id: 232,
          name: "Hala MFB",
          code: "090291",
          nibss_bank_code: "090291",
          slug: "hala-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090291",
            },
            monnify: {
              bankCode: "090291",
            },
            nibss: {
              bankCode: "090291",
            },
            providus: {
              bankCode: "090291",
            },
            quickteller: {
              bankCode: "090291",
            },
            test_transfer: {
              bankCode: "090291",
            },
            wema: {
              bankCode: "090291",
            },
          }),
        },
        {
          id: 233,
          name: "IKENNE MFB",
          code: "090324",
          nibss_bank_code: "090324",
          slug: "ikenne-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090324",
            },
            monnify: {
              bankCode: "090324",
            },
            nibss: {
              bankCode: "090324",
            },
            providus: {
              bankCode: "090324",
            },
            quickteller: {
              bankCode: "090324",
            },
            test_transfer: {
              bankCode: "090324",
            },
            wema: {
              bankCode: "090324",
            },
          }),
        },
        {
          id: 234,
          name: "Ikire MFB",
          code: "090279",
          nibss_bank_code: "090279",
          slug: "ikire-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090279",
            },
            monnify: {
              bankCode: "090279",
            },
            nibss: {
              bankCode: "090279",
            },
            providus: {
              bankCode: "090279",
            },
            quickteller: {
              bankCode: "090279",
            },
            test_transfer: {
              bankCode: "090279",
            },
            wema: {
              bankCode: "090279",
            },
          }),
        },
        {
          id: 235,
          name: "Kadick Integration Limited",
          code: "110008",
          nibss_bank_code: "110008",
          slug: "kadick-integration",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "110008",
            },
            monnify: {
              bankCode: "110008",
            },
            nibss: {
              bankCode: "110008",
            },
            providus: {
              bankCode: "110008",
            },
            quickteller: {
              bankCode: "110008",
            },
            test_transfer: {
              bankCode: "110008",
            },
            wema: {
              bankCode: "110008",
            },
          }),
        },
        {
          id: 236,
          name: "Kadpoly MICROFINANCE BANK",
          code: "090320",
          nibss_bank_code: "090320",
          slug: "kadpoly-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090320",
            },
            monnify: {
              bankCode: "090320",
            },
            nibss: {
              bankCode: "090320",
            },
            providus: {
              bankCode: "090320",
            },
            quickteller: {
              bankCode: "090320",
            },
            test_transfer: {
              bankCode: "090320",
            },
            wema: {
              bankCode: "090320",
            },
          }),
        },
        {
          id: 237,
          name: "Kontagora MFB",
          code: "090299",
          nibss_bank_code: "090299",
          slug: "kontagora-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090299",
            },
            monnify: {
              bankCode: "090299",
            },
            nibss: {
              bankCode: "090299",
            },
            providus: {
              bankCode: "090299",
            },
            quickteller: {
              bankCode: "090299",
            },
            test_transfer: {
              bankCode: "090299",
            },
            wema: {
              bankCode: "090299",
            },
          }),
        },
        {
          id: 238,
          name: "Mainland MICROFINANCE BANK",
          code: "090323",
          nibss_bank_code: "090323",
          slug: "mainland-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090323",
            },
            monnify: {
              bankCode: "090323",
            },
            nibss: {
              bankCode: "090323",
            },
            providus: {
              bankCode: "090323",
            },
            quickteller: {
              bankCode: "090323",
            },
            test_transfer: {
              bankCode: "090323",
            },
            wema: {
              bankCode: "090323",
            },
          }),
        },
        {
          id: 239,
          name: "Mayfair MFB",
          code: "090321",
          nibss_bank_code: "090321",
          slug: "mayfair-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090321",
            },
            monnify: {
              bankCode: "090321",
            },
            nibss: {
              bankCode: "090321",
            },
            providus: {
              bankCode: "090321",
            },
            quickteller: {
              bankCode: "090321",
            },
            test_transfer: {
              bankCode: "090321",
            },
            wema: {
              bankCode: "090321",
            },
          }),
        },
        {
          id: 240,
          name: "MayFresh Mortgage Bank",
          code: "070019",
          nibss_bank_code: "070019",
          slug: "mayFresh-mortgage",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "070019",
            },
            monnify: {
              bankCode: "070019",
            },
            nibss: {
              bankCode: "070019",
            },
            providus: {
              bankCode: "070019",
            },
            quickteller: {
              bankCode: "319",
            },
            test_transfer: {
              bankCode: "070019",
            },
            wema: {
              bankCode: "070019",
            },
          }),
        },
        {
          id: 241,
          name: "Megapraise Microfinance Bank",
          code: "090280",
          nibss_bank_code: "090280",
          slug: "megapraise-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090280",
            },
            monnify: {
              bankCode: "090280",
            },
            nibss: {
              bankCode: "090280",
            },
            providus: {
              bankCode: "090280",
            },
            quickteller: {
              bankCode: "090280",
            },
            test_transfer: {
              bankCode: "090280",
            },
            wema: {
              bankCode: "090280",
            },
          }),
        },
        {
          id: 242,
          name: "Meridian MFB",
          code: "090275",
          nibss_bank_code: "090275",
          slug: "meridian-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090275",
            },
            monnify: {
              bankCode: "090275",
            },
            nibss: {
              bankCode: "090275",
            },
            providus: {
              bankCode: "090275",
            },
            quickteller: {
              bankCode: "090275",
            },
            test_transfer: {
              bankCode: "090275",
            },
            wema: {
              bankCode: "090275",
            },
          }),
        },
        {
          id: 243,
          name: "Nnew women MFB",
          code: "090283",
          nibss_bank_code: "090283",
          slug: "nnew-women-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090283",
            },
            monnify: {
              bankCode: "090283",
            },
            nibss: {
              bankCode: "090283",
            },
            providus: {
              bankCode: "090283",
            },
            quickteller: {
              bankCode: "090283",
            },
            test_transfer: {
              bankCode: "090283",
            },
            wema: {
              bankCode: "090283",
            },
          }),
        },
        {
          id: 244,
          name: "Oche MFB",
          code: "090333",
          nibss_bank_code: "090333",
          slug: "oche-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090333",
            },
            monnify: {
              bankCode: "090333",
            },
            nibss: {
              bankCode: "090333",
            },
            providus: {
              bankCode: "090333",
            },
            quickteller: {
              bankCode: "090333",
            },
            test_transfer: {
              bankCode: "090333",
            },
            wema: {
              bankCode: "090333",
            },
          }),
        },
        {
          id: 245,
          name: "Omiye MFB",
          code: "090295",
          nibss_bank_code: "090295",
          slug: "omiye-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090295",
            },
            monnify: {
              bankCode: "090295",
            },
            nibss: {
              bankCode: "090295",
            },
            providus: {
              bankCode: "090295",
            },
            quickteller: {
              bankCode: "395",
            },
            test_transfer: {
              bankCode: "090295",
            },
            wema: {
              bankCode: "090295",
            },
          }),
        },
        {
          id: 246,
          name: "Pillar MFB",
          code: "090289",
          nibss_bank_code: "090289",
          slug: "pillar-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090289",
            },
            monnify: {
              bankCode: "090289",
            },
            nibss: {
              bankCode: "090289",
            },
            providus: {
              bankCode: "090289",
            },
            quickteller: {
              bankCode: "090289",
            },
            test_transfer: {
              bankCode: "090289",
            },
            wema: {
              bankCode: "090289",
            },
          }),
        },
        {
          id: 247,
          name: "Polyuwanna MFB",
          code: "090296",
          nibss_bank_code: "090296",
          slug: "polyuwanna-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090296",
            },
            monnify: {
              bankCode: "090296",
            },
            nibss: {
              bankCode: "090296",
            },
            providus: {
              bankCode: "090296",
            },
            quickteller: {
              bankCode: "320",
            },
            test_transfer: {
              bankCode: "090296",
            },
            wema: {
              bankCode: "090296",
            },
          }),
        },
        {
          id: 248,
          name: "Prestige Microfinance bank",
          code: "090274",
          nibss_bank_code: "090274",
          slug: "prestige-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090274",
            },
            monnify: {
              bankCode: "090274",
            },
            nibss: {
              bankCode: "090274",
            },
            providus: {
              bankCode: "090274",
            },
            quickteller: {
              bankCode: "090274",
            },
            test_transfer: {
              bankCode: "090274",
            },
            wema: {
              bankCode: "090274",
            },
          }),
        },
        {
          id: 249,
          name: "Purplemoney MFB",
          code: "090303",
          nibss_bank_code: "090303",
          slug: "purplemoney-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090303",
            },
            monnify: {
              bankCode: "090303",
            },
            nibss: {
              bankCode: "090303",
            },
            providus: {
              bankCode: "090303",
            },
            quickteller: {
              bankCode: "090303",
            },
            test_transfer: {
              bankCode: "090303",
            },
            wema: {
              bankCode: "090303",
            },
          }),
        },
        {
          id: 250,
          name: "Rahama MFB",
          code: "090170",
          nibss_bank_code: "090170",
          slug: "rahama-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090170",
            },
            monnify: {
              bankCode: "090170",
            },
            nibss: {
              bankCode: "090170",
            },
            providus: {
              bankCode: "090170",
            },
            quickteller: {
              bankCode: "090170",
            },
            test_transfer: {
              bankCode: "090170",
            },
            wema: {
              bankCode: "090170",
            },
          }),
        },
        {
          id: 251,
          name: "Rephidim MICROFINANCE BANK",
          code: "090322",
          nibss_bank_code: "090322",
          slug: "rephidim-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090322",
            },
            monnify: {
              bankCode: "090322",
            },
            nibss: {
              bankCode: "090322",
            },
            providus: {
              bankCode: "090322",
            },
            quickteller: {
              bankCode: "090322",
            },
            test_transfer: {
              bankCode: "090322",
            },
            wema: {
              bankCode: "090322",
            },
          }),
        },
        {
          id: 252,
          name: "Sulsap MFB",
          code: "090305",
          nibss_bank_code: "090305",
          slug: "sulsap-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090305",
            },
            monnify: {
              bankCode: "090305",
            },
            nibss: {
              bankCode: "090305",
            },
            providus: {
              bankCode: "090305",
            },
            quickteller: {
              bankCode: "090305",
            },
            test_transfer: {
              bankCode: "090305",
            },
            wema: {
              bankCode: "090305",
            },
          }),
        },
        {
          id: 253,
          name: "Trust MFB",
          code: "090327",
          nibss_bank_code: "090327",
          slug: "trust-mfb",
          country: "NG",
          can_pay_with_bank: false,
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090327",
            },
            monnify: {
              bankCode: "090327",
            },
            nibss: {
              bankCode: "090327",
            },
            providus: {
              bankCode: "090327",
            },
            quickteller: {
              bankCode: "090327",
            },
            test_transfer: {
              bankCode: "090327",
            },
            wema: {
              bankCode: "090327",
            },
          }),
        },
        {
          id: 254,
          name: "ABC Bank",
          code: "0035",
          slug: "abc-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0035",
            },
            sasapay: {
              bankCode: "35",
            },
            test_transfer: {
              bankCode: "0035",
            },
          }),
        },
        {
          id: 255,
          name: "ABSA",
          code: "0003",
          slug: "absa-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0003",
            },
            sasapay: {
              bankCode: "03",
            },
            test_transfer: {
              bankCode: "0003",
            },
          }),
        },
        {
          id: 256,
          name: "Access Bank",
          code: "0026",
          slug: "access-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0026",
            },
            sasapay: {
              bankCode: "26",
            },
            test_transfer: {
              bankCode: "0026",
            },
          }),
        },
        {
          id: 257,
          name: "Bank of Africa",
          code: "0019",
          slug: "bank-of-africa-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0019",
            },
            sasapay: {
              bankCode: "19",
            },
            test_transfer: {
              bankCode: "0019",
            },
          }),
        },
        {
          id: 258,
          name: "Bank of Baroda",
          code: "0006",
          slug: "bank-of-baroda-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0006",
            },
            sasapay: {
              bankCode: "06",
            },
            test_transfer: {
              bankCode: "0006",
            },
          }),
        },
        {
          id: 259,
          name: "Bank of India",
          code: "0005",
          slug: "bank-of-india-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0005",
            },
            sasapay: {
              bankCode: "05",
            },
            test_transfer: {
              bankCode: "0005",
            },
          }),
        },
        {
          id: 260,
          name: "Chase Bank",
          code: "0030",
          slug: "chase-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0030",
            },
            sasapay: {
              bankCode: "30",
            },
            test_transfer: {
              bankCode: "0030",
            },
          }),
        },
        {
          id: 261,
          name: "Citi Bank",
          code: "0016",
          slug: "citi-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0016",
            },
            sasapay: {
              bankCode: "16",
            },
            test_transfer: {
              bankCode: "0016",
            },
          }),
        },
        {
          id: 262,
          name: "Consolidated",
          code: "0023",
          slug: "consolidated-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0023",
            },
            sasapay: {
              bankCode: "23",
            },
            test_transfer: {
              bankCode: "0023",
            },
          }),
        },
        {
          id: 263,
          name: "Coop Bank",
          code: "0011",
          slug: "coop-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0011",
            },
            sasapay: {
              bankCode: "11",
            },
            test_transfer: {
              bankCode: "0011",
            },
          }),
        },
        {
          id: 264,
          name: "Credit Bank",
          code: "0025",
          slug: "credit-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0025",
            },
            sasapay: {
              bankCode: "25",
            },
            test_transfer: {
              bankCode: "0025",
            },
          }),
        },
        {
          id: 265,
          name: "Development Bank",
          code: "0059",
          slug: "development-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0059",
            },
            sasapay: {
              bankCode: "59",
            },
            test_transfer: {
              bankCode: "0059",
            },
          }),
        },
        {
          id: 266,
          name: "DIB Bank",
          code: "0075",
          slug: "dib-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0075",
            },
            sasapay: {
              bankCode: "75",
            },
            test_transfer: {
              bankCode: "0075",
            },
          }),
        },
        {
          id: 267,
          name: "DTB",
          code: "0063",
          slug: "dtb-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0063",
            },
            sasapay: {
              bankCode: "63",
            },
            test_transfer: {
              bankCode: "0063",
            },
          }),
        },
        {
          id: 268,
          name: "Eco Bank",
          code: "0043",
          slug: "eco-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0043",
            },
            sasapay: {
              bankCode: "43",
            },
            test_transfer: {
              bankCode: "0043",
            },
          }),
        },
        {
          id: 269,
          name: "Equatorial Commercial Bank",
          code: "0049",
          slug: "equatorial-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0049",
            },
            sasapay: {
              bankCode: "49",
            },
            test_transfer: {
              bankCode: "0049",
            },
          }),
        },
        {
          id: 270,
          name: "Equity Bank",
          code: "0068",
          slug: "equity-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0068",
            },
            sasapay: {
              bankCode: "68",
            },
            test_transfer: {
              bankCode: "0068",
            },
          }),
        },
        {
          id: 271,
          name: "Family Bank",
          code: "0070",
          slug: "family-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0070",
            },
            sasapay: {
              bankCode: "70",
            },
            test_transfer: {
              bankCode: "0070",
            },
          }),
        },
        {
          id: 272,
          name: "Faulu Bank",
          code: "0079",
          slug: "faulu-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0079",
            },
            sasapay: {
              bankCode: "79",
            },
            test_transfer: {
              bankCode: "0079",
            },
          }),
        },
        {
          id: 273,
          name: "First Community Bank",
          code: "0074",
          slug: "first-community-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0074",
            },
            sasapay: {
              bankCode: "74",
            },
            test_transfer: {
              bankCode: "0074",
            },
          }),
        },
        {
          id: 274,
          name: "Gt Bank",
          code: "0053",
          slug: "gt-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0053",
            },
            sasapay: {
              bankCode: "53",
            },
            test_transfer: {
              bankCode: "0053",
            },
          }),
        },
        {
          id: 275,
          name: "Guardian Bank",
          code: "0055",
          slug: "guardian-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0055",
            },
            sasapay: {
              bankCode: "55",
            },
            test_transfer: {
              bankCode: "0055",
            },
          }),
        },
        {
          id: 276,
          name: "Gulf African Bank",
          code: "0072",
          slug: "gulf-african-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0072",
            },
            sasapay: {
              bankCode: "72",
            },
            test_transfer: {
              bankCode: "0072",
            },
          }),
        },
        {
          id: 277,
          name: "Habib Bank AG Zurich",
          code: "0017",
          slug: "habib-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0017",
            },
            sasapay: {
              bankCode: "17",
            },
            test_transfer: {
              bankCode: "0017",
            },
          }),
        },
        {
          id: 278,
          name: "Housing finance",
          code: "0061",
          slug: "housing-finance-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0061",
            },
            sasapay: {
              bankCode: "61",
            },
            test_transfer: {
              bankCode: "0061",
            },
          }),
        },
        {
          id: 279,
          name: "I&M Bank",
          code: "0057",
          slug: "i&m-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0057",
            },
            sasapay: {
              bankCode: "57",
            },
            test_transfer: {
              bankCode: "0057",
            },
          }),
        },
        {
          id: 280,
          name: "IPS (Instant Payment Switch)",
          code: "9999",
          slug: "ips-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "9999",
            },
            sasapay: {
              bankCode: "99",
            },
            test_transfer: {
              bankCode: "9999",
            },
          }),
        },
        {
          id: 281,
          name: "KCB",
          code: "0001",
          slug: "kcb-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0001",
            },
            sasapay: {
              bankCode: "01",
            },
            test_transfer: {
              bankCode: "0001",
            },
          }),
        },
        {
          id: 282,
          name: "Kingdom Bank",
          code: "0051",
          slug: "kingdom-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0051",
            },
            sasapay: {
              bankCode: "51",
            },
            test_transfer: {
              bankCode: "0051",
            },
          }),
        },
        {
          id: 283,
          name: "KWFT",
          code: "0078",
          slug: "kwft-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0078",
            },
            sasapay: {
              bankCode: "78",
            },
            test_transfer: {
              bankCode: "0078",
            },
          }),
        },
        {
          id: 284,
          name: "M-Oriental",
          code: "0014",
          slug: "m-oriental-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0014",
            },
            sasapay: {
              bankCode: "14",
            },
            test_transfer: {
              bankCode: "0014",
            },
          }),
        },
        {
          id: 285,
          name: "Mayfair Bank",
          code: "0065",
          slug: "mayfair-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0065",
            },
            sasapay: {
              bankCode: "65",
            },
            test_transfer: {
              bankCode: "0065",
            },
          }),
        },
        {
          id: 286,
          name: "Middle East Bank",
          code: "0018",
          slug: "middle-east-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0018",
            },
            sasapay: {
              bankCode: "18",
            },
            test_transfer: {
              bankCode: "0018",
            },
          }),
        },
        {
          id: 287,
          name: "NBK",
          code: "0012",
          slug: "nbk-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0012",
            },
            sasapay: {
              bankCode: "12",
            },
            test_transfer: {
              bankCode: "0012",
            },
          }),
        },
        {
          id: 288,
          name: "NCBA",
          code: "0007",
          slug: "ncba-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0007",
            },
            sasapay: {
              bankCode: "07",
            },
            test_transfer: {
              bankCode: "0007",
            },
          }),
        },
        {
          id: 289,
          name: "Paramount",
          code: "0050",
          slug: "paramount-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0050",
            },
            sasapay: {
              bankCode: "50",
            },
            test_transfer: {
              bankCode: "0050",
            },
          }),
        },
        {
          id: 290,
          name: "Post Bank",
          code: "0099",
          slug: "post-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0099",
            },
            sasapay: {
              bankCode: "99",
            },
            test_transfer: {
              bankCode: "0099",
            },
          }),
        },
        {
          id: 291,
          name: "Prime Bank",
          code: "0010",
          slug: "prime-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0010",
            },
            sasapay: {
              bankCode: "10",
            },
            test_transfer: {
              bankCode: "0010",
            },
          }),
        },
        {
          id: 292,
          name: "SBM",
          code: "0060",
          slug: "sbm-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0060",
            },
            sasapay: {
              bankCode: "60",
            },
            test_transfer: {
              bankCode: "0060",
            },
          }),
        },
        {
          id: 293,
          name: "Sidian Bank",
          code: "0066",
          slug: "sidian-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0066",
            },
            sasapay: {
              bankCode: "66",
            },
            test_transfer: {
              bankCode: "0066",
            },
          }),
        },
        {
          id: 294,
          name: "Stanbic Bank",
          code: "0031",
          slug: "stanbic-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0031",
            },
            sasapay: {
              bankCode: "31",
            },
            test_transfer: {
              bankCode: "0031",
            },
          }),
        },
        {
          id: 295,
          name: "Stanchart",
          code: "0002",
          slug: "stanchart-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0002",
            },
            sasapay: {
              bankCode: "02",
            },
            test_transfer: {
              bankCode: "0002",
            },
          }),
        },
        {
          id: 296,
          name: "UBA",
          code: "0076",
          slug: "uba-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0076",
            },
            sasapay: {
              bankCode: "76",
            },
            test_transfer: {
              bankCode: "0076",
            },
          }),
        },
        {
          id: 297,
          name: "Victoria Bank",
          code: "0054",
          slug: "victoria-bank-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0054",
            },
            sasapay: {
              bankCode: "54",
            },
            test_transfer: {
              bankCode: "0054",
            },
          }),
        },
        {
          id: 298,
          name: "GOODNEWS MICROFINANCE BANK",
          code: "090495",
          slug: "goodnews-mfb",
          nibss_bank_code: "090495",
          country: "NG",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "090495",
            },
            monnify: {
              bankCode: "090495",
            },
            nibss: {
              bankCode: "090495",
            },
            providus: {
              bankCode: "090495",
            },
            quickteller: {
              bankCode: "090495",
            },
            test_transfer: {
              bankCode: "090495",
            },
            wema: {
              bankCode: "090495",
            },
          }),
        },
        {
          id: 299,
          name: "Choice Microfinance Bank",
          code: "0036",
          slug: "choice-microfinance-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0036",
            },
            sasapay: {
              bankCode: "36",
            },
            test_transfer: {
              bankCode: "0036",
            },
          }),
        },
        {
          id: 300,
          name: "Stima Sacco",
          code: "0089",
          slug: "stima-sacco-ke",
          country: "KE",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            cellulant: {
              bankCode: "0089",
            },
            sasapay: {
              bankCode: "89",
            },
            test_transfer: {
              bankCode: "0089",
            },
          }),
        },
        {
          id: 301,
          name: "ABSA",
          code: "632005",
          slug: "absa-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "632005",
            },
            test_transfer: {
              bankCode: "632005",
            },
          }),
        },
        {
          id: 302,
          name: "African Bank",
          code: "430000",
          slug: "african-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "430000",
            },
            test_transfer: {
              bankCode: "430000",
            },
          }),
        },
        {
          id: 303,
          name: "Albaraka Bank",
          code: "800000",
          slug: "albaraka-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "800000",
            },
            test_transfer: {
              bankCode: "800000",
            },
          }),
        },
        {
          id: 304,
          name: "Bank Zero",
          code: "888000",
          slug: "bank-zero-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "888000",
            },
            test_transfer: {
              bankCode: "888000",
            },
          }),
        },
        {
          id: 305,
          name: "Bidvest Bank",
          code: "462005",
          slug: "bidvest-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "462005",
            },
            test_transfer: {
              bankCode: "462005",
            },
          }),
        },
        {
          id: 306,
          name: "Capitec Bank",
          code: "470010",
          slug: "capitec-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "470010",
            },
            test_transfer: {
              bankCode: "470010",
            },
          }),
        },
        {
          id: 307,
          name: "Discovery Bank",
          code: "679000",
          slug: "discovery-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "679000",
            },
            test_transfer: {
              bankCode: "679000",
            },
          }),
        },
        {
          id: 308,
          name: "HSBC Bank",
          code: "587000",
          slug: "hsbc-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "587000",
            },
            test_transfer: {
              bankCode: "587000",
            },
          }),
        },
        {
          id: 309,
          name: "Investec",
          code: "580105",
          slug: "investec-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "580105",
            },
            test_transfer: {
              bankCode: "580105",
            },
          }),
        },
        {
          id: 310,
          name: "Nedbank",
          code: "198765",
          slug: "nedbank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "198765",
            },
            test_transfer: {
              bankCode: "198765",
            },
          }),
        },
        {
          id: 311,
          name: "Sasfin Bank",
          code: "683000",
          slug: "sasfin-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "683000",
            },
            test_transfer: {
              bankCode: "683000",
            },
          }),
        },
        {
          id: 312,
          name: "Standard Chartered Bank",
          code: "730020",
          slug: "standard-chartered-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "730020",
            },
            test_transfer: {
              bankCode: "730020",
            },
          }),
        },
        {
          id: 313,
          name: "Ubank Limited",
          code: "431010",
          slug: "ubank-limited-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "431010",
            },
            test_transfer: {
              bankCode: "431010",
            },
          }),
        },
        {
          id: 314,
          name: "TymeBank",
          code: "678910",
          slug: "tymeBank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "678910",
            },
            test_transfer: {
              bankCode: "678910",
            },
          }),
        },
        {
          id: 315,
          name: "Standard Bank",
          code: "051001",
          slug: "standard-bank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "051001",
            },
            test_transfer: {
              bankCode: "051001",
            },
          }),
        },
        {
          id: 316,
          name: "FNB",
          code: "250655",
          slug: "fnb-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "250655",
            },
            test_transfer: {
              bankCode: "250655",
            },
          }),
        },
        {
          id: 317,
          name: "RMB",
          code: "250655",
          slug: "rmb-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "250655",
            },
            test_transfer: {
              bankCode: "250655",
            },
          }),
        },
        {
          id: 318,
          name: "CitiBank",
          code: "350005",
          slug: "citibank-za",
          country: "ZA",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            ozow: {
              bankCode: "350005",
            },
            test_transfer: {
              bankCode: "350005",
            },
          }),
        },
        {
          id: 319,
          name: "Optimus Bank",
          code: "000036",
          slug: "optimus-ng",
          country: "NG",
          deactivated: false,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
          additional_settings: JSON.stringify({
            flutterwave: {
              bankCode: "000036",
            },
            monnify: {
              bankCode: "000036",
            },
            nibss: {
              bankCode: "000036",
            },
            providus: {
              bankCode: "000036",
            },
            quickteller: {
              bankCode: "107",
            },
            test_transfer: {
              bankCode: "000036",
            },
            wema: {
              bankCode: "000036",
            },
          }),
        },
      ],
      {
        updateOnDuplicate: [
          "name",
          "code",
          "nibss_bank_code",
          "slug",
          "country",
          "deactivated",
        ],
      }
    );
  },

  down: (queryInterface, _Sequelize) =>
    queryInterface.bulkDelete("const_banks", null, {}),
};
