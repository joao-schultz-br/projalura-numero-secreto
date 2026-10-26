# Jogo do Número Secreto

Este repositório contém um jogo simples em que você tenta adivinhar um número secreto entre 0 e 100.

## Comandos de Git e GitHub

Os comandos abaixo ajudam a configurar a autenticação com o GitHub e a enviar alterações do projeto.

### Conferir o repositório

```bash
# Ver o estado dos arquivos e da branch
git status

# Conferir os endereços remotos do repositório
git remote -v
```

### Configurar acesso por SSH

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

### Enviar alterações com Git

Confira o que será enviado, adicione os arquivos, crie um commit e envie para a branch `main`:

```bash
git status
git add index.html style.css script.js README.md
git commit -m "Descreva as alterações"
git push origin main
```

Para adicionar todos os arquivos novos ou modificados do projeto, use `git add .` no lugar da lista de arquivos. Confira `git status` antes do commit para garantir que somente os arquivos desejados serão incluídos.

### Inspecionar alterações

```bash
# Mostrar o estado resumido da branch e dos arquivos
git status --short --branch

# Ver as alterações feitas em um arquivo
git diff -- index.html

# Verificar espaços em branco problemáticos no diff
git diff --check

# Resumir as alterações por arquivo
git diff --stat
```

### Usar HTTPS no lugar de SSH

Se preferir HTTPS, altere o endereço remoto:

```bash
git remote set-url origin https://github.com/joao-schultz-br/projalura-numero-secreto.git
```

Para voltar ao SSH:

```bash
git remote set-url origin git@github.com:joao-schultz-br/projalura-numero-secreto.git
```

Com HTTPS, autentique-se pelo navegador ou pelo gerenciador de credenciais do Git; o GitHub não aceita a senha normal da conta como senha para operações Git.
