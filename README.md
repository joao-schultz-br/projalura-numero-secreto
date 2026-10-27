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

# Desfazer um commit criando outro commit inverso (recomendado para commits já enviados)
git revert <id-do-commit>

# Ver referências recentes, inclusive commits que deixaram de aparecer no histórico
git reflog
```

`git restore <arquivo>` descarta as alterações locais desse arquivo. Use somente se tiver certeza de que não precisa delas. Evite `git reset --hard` e `git clean`: eles podem apagar trabalho local. Para corrigir um commit que ainda não foi enviado, consulte `git commit --amend`; não altere commits que outras pessoas já receberam sem combinar com elas.

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
