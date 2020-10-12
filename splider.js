const https = require('https');
const cheerio = require('cheerio');

let url = 'https://hanyu.baidu.com/s?wd=窈窈冥冥&ptype=zici';

https.get(url, function (res) {
  let chunks = [],
      size = 0;
  res.on('data', function (chunk) {
      chunks.push(chunk);
      size += chunk.length;
  });

  res.on('end', function () {
      console.log('数据包传输完毕');
      let data = Buffer.concat(chunks, size);
      let html = data.toString();

      let $ = cheerio.load(html);

      let result = [];

      $('.tab-content').each((i, item) => {
        console.log($(item).text())
      })
  });
});
