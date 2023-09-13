'use strict';
self.addEventListener('fetch', (event) => { // ファイルの受信が必要になったら
    event.respondWith( // 受信結果は以下の通り返すものとする。
        fetch(event.request)
            .then((response) => {
                return response;
            })
    );
});