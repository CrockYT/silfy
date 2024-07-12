document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const commandList = document.getElementById('command-list');

    const commands = [
        { name: 'roll', description: '指定した数値の中でランダムで数字を出します', usage: '例: /roll 10' },
        { name: 'temp-voice setup', description: '一時使用可能なボイスチャンネルのセットアップを実行します', usage: '例: /temp-voice setup' },
        { name: 'moderate deletion', description: '指定分のメッセージを削除します', usage: '例: /moderate deletion 10' },
        { name: 'moderate nuke', description: '同チャンネルのメッセージを全て削除します', usage: '例: /moderate nuke' },
        { name: 'config default-role', description: '自動ロールのコンフィグです', usage: '例: /config default-role' },
        { name: 'config add default-role', description: '鯖に入ったときに自動で付けるロールを設定できます', usage: '例: /config add default-role @member' },
        { name: 'ping', description: 'Botのping値を表示します', usage: '例: /ping' },
        { name: 'rolePanel', description: 'ロールを取得できるパネルを作成します', usage: '例: /rolePanel' },
        { name: 'userInfo', description: 'ユーザーの情報を表示します', usage: '例: /userInfo @user' },
        { name: 'admin mode', description: '※Bot管理者専用 | Botのモードを選択します', usage: '例: /admin mode' },
        { name: 'role create', description: 'ロールの作成コマンド | めっちゃBeta版', usage: '例: /role create "New Role"' },
        // ここに他のコマンドを追加
    ];

    function displayCommands(filter = '') {
        commandList.innerHTML = '';
        const filteredCommands = commands.filter(command => command.name.includes(filter) || command.description.includes(filter));
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

    searchInput.addEventListener('input', function() {
        displayCommands(searchInput.value);
    });

    displayCommands();
});
