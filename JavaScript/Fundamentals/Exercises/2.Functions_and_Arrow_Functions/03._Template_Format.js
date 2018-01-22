function templateFormat(data) {
    data = data.map(String)

    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log('<quiz>')

    for (let i = 0; i < data.length; i += 2) {
        let question = data[i]
        let answer = data[i + 1]

        console.log('  <question>')
        console.log(`    ${question}`)
        console.log('  </question>')
        console.log('  <answer>')
        console.log(`    ${answer}`)
        console.log('  </answer>')
    }
    console.log('</quiz>')
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"])
// <?xml version="1.0" encoding="UTF-8"?>
// <quiz>
//   <question>
//     Who was the forty-second president of the U.S.A.?
//   </question>
//   <answer>
//     William Jefferson Clinton
//   </answer>
// </quiz>

templateFormat(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"])
// <?xml version="1.0" encoding="UTF-8"?>
// <quiz>
//   <question>
//     Dry ice is a frozen form of which gas?
//   </question>
//   <answer>
//     Carbon Dioxide
//   </answer>
//   <question>
//     What is the brightest star in the night sky?
//   </question>
//   <answer>
//     Sirius
//   </answer>
// </quiz>
