<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>予定登録アプリ</title>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
</head>
<body>
    <div id="app">
        <form id="eventForm">
            <div>
                <label for="title">タイトル:</label>
                <input type="text" id="title" required>
            </div>
            <div>
                <label for="date">日時:</label>
                <input type="datetime-local" id="date" required>
            </div>
            <div>
                <label for="amount">金額:</label>
                <input type="number" id="amount" required>
            </div>
            <div>
                <label for="location">場所:</label>
                <input type="text" id="location" required>
            </div>
            <button type="submit">登録</button>
        </form>
    </div>

    <script>
        liff.init({ liffId: "あなたのLIFF ID" })
            .then(() => {
                // LIFF初期化成功
                console.log("LIFF initialized");
            })
            .catch((err) => {
                // LIFF初期化エラー
                console.error("LIFF initialization failed", err);
            });

        document.getElementById('eventForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = {
                title: document.getElementById('title').value,
                date: document.getElementById('date').value,
                amount: document.getElementById('amount').value,
                location: document.getElementById('location').value
            };

            try {
                const response = await fetch('あなたのGAS Web App URL', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    liff.closeWindow();
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    </script>
</body>
</html>
