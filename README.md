# Jogo do Número Secreto

Este repositório contém um jogo simples em que você tenta adivinhar um número secreto entre 0 e 100.

## Guia de comandos Git e GitHub

Este guia reúne os comandos Git mais usados no dia a dia. Troque os exemplos entre `< >` pelos nomes de arquivo, branch ou repositório corretos. Os comandos Git funcionam no Terminal; o GitHub é o serviço online que hospeda o repositório.

### Começar um projeto

```bash
# Criar um repositório Git na pasta atual
git init

# Baixar uma cópia de um repositório do GitHub
git clone https://github.com/usuario/repositorio.git

# Definir seu nome e e-mail nos commits (uma vez por computador)
git config --global user.name "Seu nome"
git config --global user.email "seu-email@example.com"

# Conferir as configurações
git config --global --list
```

### Conferir o estado e o histórico

```bash
# Ver branch atual e arquivos modificados
git status

# Versão resumida do estado
git status --short --branch

# Mostrar os commits recentes
git log

# Histórico compacto, uma linha por commit
git log --oneline

# Mostrar histórico com branches e tags em formato visual
git log --oneline --graph --decorate --all

# Ver os detalhes de um commit
git show <id-do-commit>

# Ver as branches locais
git branch

# Ver branches locais e remotas
git branch --all

# Ver os endereços dos repositórios remotos
git remote -v
```

### Preparar e registrar alterações

```bash
# Preparar um arquivo específico para o próximo commit
git add <arquivo>

# Preparar todos os arquivos novos e modificados desta pasta
git add .

# Tirar um arquivo da área de preparação sem apagar suas alterações
git restore --staged <arquivo>

# Conferir alterações ainda não preparadas
git diff

# Conferir alterações já preparadas para o commit
git diff --staged

# Verificar espaços em branco problemáticos
git diff --check

# Criar um commit com as alterações preparadas
git commit -m "Descreva as alterações"

# Resumir arquivos alterados entre commits
git diff --stat
```

Antes de `git add .`, confira `git status` para não incluir arquivos que não queria enviar.

### Corrigir ou desfazer alterações

```bash
# Descartar alterações não preparadas de um arquivo
git restore <arquivo>

# Tirar um arquivo da área de preparação, mantendo as alterações no arquivo
git reset <arquivo>

# Desfazer um commit criando outro commit inverso (recomendado para commits já enviados)
git revert <id-do-commit>

# Ver referências recentes, inclusive commits que deixaram de aparecer no histórico
git reflog
```

`git restore <arquivo>` descarta as alterações locais ainda não preparadas desse arquivo. Use somente se tiver certeza de que não precisa delas. Já `git reset <arquivo>` (sem indicar um commit) apenas tira o arquivo da área de preparação, mantendo o conteúdo alterado no seu computador.

#### O que faz `git reset`

`git reset` move a branch atual para outro commit. O efeito sobre as alterações depende da opção:

```bash
# Voltar o último commit, mantendo as alterações preparadas para um novo commit
git reset --soft HEAD~1

# Voltar o último commit e deixar as alterações no computador, mas fora da área de preparação
git reset HEAD~1

# Voltar o último commit e descartar alterações rastreadas; uso perigoso
git reset --hard HEAD~1
```

`HEAD~1` significa “o commit anterior ao atual”. Sem `--soft` ou `--hard`, o padrão é `--mixed`: o commit é removido da ponta da branch e as alterações dele ficam nos arquivos, mas deixam de estar preparadas. `--soft` também move a branch, mas mantém as alterações preparadas. `--hard` move a branch e descarta as alterações rastreadas no diretório de trabalho e na área de preparação. **Não use `--hard` se houver trabalho que queira preservar.**

Em geral, use `git revert <id-do-commit>` para desfazer um commit já enviado ao GitHub: ele cria um novo commit de reversão sem reescrever o histórico compartilhado. `git reset` é mais indicado para reorganizar commits locais que ainda não foram compartilhados. `git reflog` pode ajudar a localizar um commit após um reset, mas não é um substituto para cópias de segurança.

Para corrigir a mensagem ou incluir alterações em um commit local recente, `git commit --amend` substitui o commit atual por outro. Evite usar essa opção em commits que outras pessoas já receberam sem combinar com elas.

`git clean` remove arquivos não rastreados pelo Git. Ele não é necessário no fluxo normal deste projeto e pode apagar arquivos locais; não o execute sem entender exatamente o que será removido.

### Trabalhar com branches

```bash
# Criar uma branch
git branch <nome-da-branch>

# Trocar para uma branch existente
git switch <nome-da-branch>

# Criar uma branch e já mudar para ela
git switch -c <nome-da-branch>

# Integrar outra branch à branch atual
git merge <nome-da-branch>

# Apagar uma branch local já integrada
git branch -d <nome-da-branch>
```

Uma branch permite trabalhar em uma mudança separadamente. Em projetos compartilhados, é comum enviar a branch ao GitHub e abrir um pull request para revisão antes de integrá-la à branch principal.

### Sincronizar com o GitHub

```bash
# Buscar informações novas do remoto, sem integrar mudanças na branch atual
git fetch origin

# Buscar e integrar mudanças da branch main remota
git pull --ff-only origin main

# Enviar a branch main ao remoto origin
git push origin main

# Enviar uma branch pela primeira vez e configurar o rastreamento
git push -u origin <nome-da-branch>
```

Um fluxo simples para enviar uma alteração à branch `main`:

```bash
git status
git add <arquivo>
git commit -m "Descreva as alterações"
git push origin main
```

Se `git push` for recusado porque o remoto tem commits que você ainda não tem, confira primeiro `git status` e use `git pull --ff-only origin main`. Se o Git informar que não é possível avançar sem criar um merge, pare e avalie as diferenças antes de escolher como integrar.

### Guardar alterações temporariamente

```bash
# Guardar alterações rastreadas temporariamente
git stash push -m "descrição das alterações"

# Listar alterações guardadas
git stash list

# Recuperar a alteração guardada mais recente e removê-la da lista
git stash pop
```

### Tags e ajuda

```bash
# Listar tags
git tag

# Criar uma tag anotada para marcar uma versão
git tag -a v1.0.0 -m "Versão 1.0.0"

# Enviar uma tag ao GitHub
git push origin v1.0.0

# Abrir a ajuda geral ou a ajuda de um comando
git help
git help <comando>
```

### Configurar acesso ao GitHub por SSH

Confira se há uma chave SSH carregada no agente e quais arquivos existem na pasta SSH:

```bash
ssh-add -l
ls -al ~/.ssh
```

Se ainda não tiver uma chave, crie uma chave Ed25519. Substitua o e-mail pelo e-mail associado à sua conta GitHub:

```bash
ssh-keygen -t ed25519 -C "seu-email"
```

Carregue a chave no agente SSH do macOS:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Copie a **chave pública** para adicioná-la em **GitHub → Settings → SSH and GPG keys → New SSH key**:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

Nunca compartilhe nem adicione ao GitHub o arquivo `~/.ssh/id_ed25519`: ele é a chave privada.

Teste a autenticação:

```bash
ssh -T git@github.com
```

Uma mensagem de sucesso que diz que o GitHub não fornece acesso ao shell é normal. Esse teste verifica a autenticação, mas não envia arquivos ao repositório.

### Configurar o endereço remoto

```bash
# Conferir os endereços remotos configurados
git remote -v

# Trocar o remoto origin para HTTPS
git remote set-url origin https://github.com/joao-schultz-br/projalura-numero-secreto.git

# Trocar o remoto origin para SSH
git remote set-url origin git@github.com:joao-schultz-br/projalura-numero-secreto.git
```

Com HTTPS, autentique-se pelo navegador ou pelo gerenciador de credenciais do Git; o GitHub não aceita a senha normal da conta como senha para operações Git.

### Entender os nomes e opções usados

- **Repositório**: a pasta do projeto acompanhada pelo Git.
- **Commit**: um registro de alterações. `-m "mensagem"` informa a descrição do commit.
- **Branch**: uma linha de trabalho. `main` é o nome da branch principal deste projeto.
- **`HEAD`**: indica o commit atual. `HEAD~1` indica seu primeiro antecessor.
- **Área de preparação (staging)**: alterações selecionadas com `git add` para entrar no próximo commit.
- **`origin`**: nome padrão dado ao repositório remoto, normalmente o endereço no GitHub.
- **`<arquivo>`, `<id-do-commit>` e `<nome-da-branch>`**: espaços reservados; substitua-os pelo valor real e não digite os sinais `<` e `>`.
- **Opções com hífen**: `--all` inclui todas as branches; `--oneline` resume cada commit em uma linha; `--graph` desenha as linhas do histórico; `--decorate` mostra nomes de branches e tags; `--staged` limita a comparação ao que está preparado; `--stat` mostra um resumo de arquivos alterados; `--short` encurta o status; `--branch` inclui a branch no status.
- **`-u` em `git push -u`**: configura a branch remota como padrão para próximos `git push` e `git pull`.
- **`--ff-only` em `git pull`**: só atualiza a branch quando o avanço pode ser feito sem criar um commit de merge; se houver divergência, o comando para em vez de escolher uma integração automaticamente.
- **`-a` e `-m` em `git tag -a ... -m ...`**: criam uma tag anotada e definem sua mensagem.
- **`--global` em `git config`**: salva a configuração para todos os repositórios do usuário neste computador.
- **`ssh-add -l`**: lista identidades carregadas no agente SSH. **`ls -al ~/.ssh`** é um comando do Terminal que lista também arquivos ocultos na pasta SSH.
- **`ssh-keygen -t ed25519 -C "seu-email"`**: cria uma chave SSH Ed25519; `-C` adiciona um comentário para identificar a chave.
- **`ssh-add --apple-use-keychain`**: carrega a chave SSH no agente do macOS e permite integrá-la ao Chaves do macOS.
- **`pbcopy < ~/.ssh/id_ed25519.pub`**: copia o conteúdo da chave pública para a área de transferência do macOS. O arquivo sem `.pub` é a chave privada e não deve ser compartilhado.
- **`ssh -T git@github.com`**: testa a autenticação SSH com o GitHub; não abre um terminal remoto e não envia arquivos.
- **`git remote set-url`**: altera o endereço associado ao remoto `origin`; não muda os arquivos do projeto nem envia alterações.
