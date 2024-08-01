document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const commandList = document.getElementById('command-list');
    const categoriesContainer = document.getElementById('categories');
    const categoryButtons = categoriesContainer.querySelectorAll('.category-btn');
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    const commands = [
        { name: 'help', description: 'Botのコマンド情報とか色々入れます', usage: '例: /help', category: 'utility' },
        { name: 'roll', description: '指定した数値の中でランダムで数字を出します', usage: '例: /roll 10', category: 'play' },
        { name: 'temp-voice setup', description: '一時使用可能なボイスチャンネルのセットアップを実行します', usage: '例: /temp-voice setup', category: 'moderation' },
        { name: 'moderate deletion', description: '指定分のメッセージを削除します', usage: '例: /moderate deletion 10', category: 'manage' },
        { name: 'moderate nuke', description: '同チャンネルのメッセージを全て削除します', usage: '例: /moderate nuke', category: 'manage' },
        { name: 'config default-role', description: '自動ロールのコンフィグです', usage: '例: /config default-role true', category: 'setting' },
        { name: 'config add default-role', description: '鯖に入ったときに自動で付けるロールを設定できます', usage: '例: /config add default-role @role', category: 'manage' },
        { name: 'config join-leave-alert', description: '鯖参加 退出時のアラートのコンフィグです', usage: '例: /config join-leave-alert true', category: 'setting' },
        { name: 'config add join-alert', description: '鯖に参加した時のアラートを送信するチャンネル、また送信形式を設定できます', usage: '例: /config add join-alert #join', category: 'manage' },
        { name: 'ping', description: 'Botのping値を表示します', usage: '例: /ping', category: 'utility' },
        { name: 'rolePanel', description: 'ロールを取得できるパネルを作成します', usage: '例: /rolePanel @user', category: 'setting' },
        { name: 'userInfo', description: 'ユーザーの情報を表示します', usage: '例: /userInfo @user', category: 'manage' },
        { name: 'admin mode', description: '※Bot管理者専用 | Botのモードを選択します', usage: '例: /admin mode', category: 'moderation' },
        { name: 'role create', description: 'ロールの作成コマンド | めっちゃBeta版', usage: '例: /role create', category: 'setting' },
        { name: 'verify-panel', description: '認証パネルを作成します。画像認証に関しては画像は追加されます', usage: '例: /verift-panel @role', category: 'manage' },
        { name: 'balance', description: '現在の所持金を確認できます。使い道は考え中', usage: '例: /balance', category: 'play' },
        { name: 'daily-get', description: 'デイリーをもらえます。所持金に追加されます。はい', usage: '例: /daily-get', category: 'play' },
        { name: 'info update', description: 'アップデート情報を取得します', usage: '例: /info update', category: 'utility' },
        { name: 'approval create', description: 'ランダムのIDを作成しID入力後報酬を取得します', usage: '例: /approval create', category: 'utility' },
        { name: 'redeem', description: 'IDを入力して報酬を獲得します', usage: '例: /redeem', category: 'utility' }
        // ここに他のコマンドを追加
    ];

    function displayCommands(filter = '', category = 'all') {
        commandList.innerHTML = '';
        const filteredCommands = commands.filter(command => {
            const isCategoryMatch = category === 'all' || command.category === category;
            const isFilterMatch = command.name.includes(filter) || command.description.includes(filter);
            return isCategoryMatch && isFilterMatch;
        });
        filteredCommands.forEach(command => {
            const commandElement = document.createElement('div');
            commandElement.classList.add('command');
            commandElement.innerHTML = `
                <h3 class="selectable">/${command.name}</h3>
                <p>${command.description}</p>
                <div class="command-details">
                    <p class="selectable">${command.usage}</p>
                </div>
            `;
            commandElement.addEventListener('click', function() {
                const details = commandElement.querySelector('.command-details');
                details.classList.toggle('active');
            });
            commandList.appendChild(commandElement);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            displayCommands(searchInput.value, category);
        });
    });

    searchInput.addEventListener('input', function() {
        const activeCategory = categoriesContainer.querySelector('.category-btn.active').getAttribute('data-category');
        displayCommands(searchInput.value, activeCategory);
    });

    // ロード完了後の処理
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
        content.classList.add('loaded');
    });

    displayCommands();
});
