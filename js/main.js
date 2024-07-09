document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const commandList = document.getElementById('command-list');

    const commands = [
        { name: 'temp-voice setup', description: '一時使用可能なボイスチャンネルのセットアップを実行します' },
        { name: 'moderate deletion', description: '指定分のメッセージを削除します' },
        { name: 'moderate nuke', description: '同チャンネルのメッセージを全て削除します' },
        { name: 'config default-role', description: '自動ロールのコンフィグです' },
        { name: 'config add default-role', description: '鯖に入ったときに自動で付けるロールを設定できます' },
        { name: 'ping', description: 'Botのping値を表示します' },
        { name: 'rolePanel', description: 'ロールを取得できるパネルを作成します' },
        { name: 'userInfo', description: 'ユーザーの情報を表示します' },
        { name: 'admin mode', description: '※Bot管理者専用 | Botのモードを選択します' },
        { name: 'role create', description: 'ロールの作成コマンド | めっちゃBeta版'},
        // ここに他のコマンドを追加
    ];

    function displayCommands(filter = '') {
        commandList.innerHTML = '';
        const filteredCommands = commands.filter(command => command.name.includes(filter) || command.description.includes(filter));
        filteredCommands.forEach(command => {
            const commandElement = document.createElement('div');
            commandElement.classList.add('command');
            commandElement.innerHTML = `
                <h3>/${command.name}</h3>
                <p>${command.description}</p>
            `;
            commandList.appendChild(commandElement);
        });
    }

    searchInput.addEventListener('input', function() {
        displayCommands(searchInput.value);
    });

    displayCommands();
});

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');
    
    window.addEventListener('load', () => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            document.body.classList.remove('loaded');
            setTimeout(() => {
                window.location.href = target;
            }, 1000);
        });
    });
});
