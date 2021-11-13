# Scrum

Aplicação para o sorteio das funções dos Scrum para a equipe Sy\ "ner:gy.

### Site para o sorteio:
> <http://synergy2.epizy.com/scrum/>





# Commits

## Sintaxe

```
	"tipo"("Componente"): "ID" -descrição
```

* Os valores possíveis para "tipo" são:

	* **build:** usado quando é criado novo(s) arquivo(s) ou pasta(s);

	* **fix:** usado quando o commit é uma solução de um problema no código;

	* **feat:** usado quando se adiciona um novo recurso;

	* **test:** usado quando se faz um teste de novo recurso (test é uma variante de feat);

	* **docs:** usado na criação ou alteração de documentação;

	* **style:** usado quando se modifica o estilo do código ou se faz alguma correção ortográfica (mudança no código que não adiciona, modifica ou remove recurso);

	* **refactor:** usado quando se refatora o código;


* **"Componente":** Aqui se especifica o componente ou a estrutura trabalhada (seja o mais específico possível, evite macro-estruturas)

* *"ID":** identificação da tarefa(presente no Trello)

* **"-descrição":** livre para o dev (escrita em inglês)




## Exemplos:

* build(controller): VG01 -add Controller.js file (nesse caso não há como ser mais específico que isso, mas evite usar macroestruturas como o Controller)

* docs(journal): -added file for the day 06/02


* feat(page): VW01 -built layout mobile in portrait mode



* feat(gamerules): -built the Sony

## Obs.:

* Cada commit deverá ser de um tipo e referente a um componente: Caso você esteja trabalhando com mais de um componente, separe as mudanças de cada componente em um commit específico.

* Quando o commit não se refere a nenhuma tarefa no Trello, crie a tarefa(não necessita adicionar detalhes) numa coluna adequada e dê ela uma ID para ser usada no commit e no código.

* Essa é uma convenção da Sy "ner:gy e estará em constante desenvolvimento
