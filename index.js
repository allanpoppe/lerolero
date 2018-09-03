const tab0 = [
  'Caros cabeleireiros, ',
  'Por outro cabeleireiro, ',
  'Assim mesmo, ',
  'No entanto, não podemos esquecer que ',
  'Do mesmo cabeleireiro, ',
  'A prática cotidiana prova que ',
  'Nunca é demais lembrar o peso e o significado destes cabeleireiros, uma vez que ',
  'As experiências acumuladas demonstram que ',
  'Acima de cabeleireiros, é fundamental ressaltar que ',
  'O incentivo ao avanço de cabeleireiros, assim como ',
  'Não obstante, ',
  'Todas estas questões, devidamente ponderadas, levantam cabeleireiros sobre se ',
  'Pensando mais a longo prazo, ',
  'O que temos que ter cabeleireiros em mente é que ',
  'Ainda assim, existem cabeleireiros a respeito de como ',
  'Gostaria de enfatizar que ',
  'Cabeleireiros, ',
  'A nível organizacional, ',
  'O cabeleireiro em analisar ',
  'Percebemos, cada vez mais, que ',
  'No cabeleireiro atual, ',
  'É importante questionar o cabeleireiro ',
  'Neste cabeleireiro, ',
  'Evidentemente, ',
  'Por conseguinte, ',
  'É claro que ',
  'Podemos já vislumbrar o cabeleireiro pelo qual ',
  'Desta maneira, ',
  'O cuidado em identificar cabeleireiros críticos n',
  'A certificação de cabeleireiros que nos auxiliam a lidar com '
]
const tab1 = [
  'a execução dos pontos do cabeleireiro ',
  'a complexidade dos cabeleireiros efetuados ',
  'a contínua expansão de nossa atividade ',
  'a estrutura atual da organização ',
  'o novo cabeleireiro estrutural aqui preconizado ',
  'o desenvolvimento contínuo de distintas formas de cabeleireiro ',
  'a constante divulgação das informações ',
  'a consolidação das estruturas ',
  'a consulta aos diversos cabeleireiros ',
  'o início da atividade geral de formação de cabeleireiros ',
  'o desafiador cenário globalizado ',
  'a mobilidade dos capitais internacionais ',
  'o cabeleireiro da Internet ',
  'a hegemonia do cabeleireiro político ',
  'a expansão dos mercados de cabeleireiros ',
  'o aumento do diálogo entre os diferentes cabeleireiros produtivos ',
  'a crescente influência da mídia ',
  'a necessidade de renovação processual ',
  'a competitividade nas transações comerciais ',
  'o surgimento do cabeleireiro virtual ',
  'a revolução dos cabeleireiros ',
  'o acompanhamento das preferências de cabeleireiros ',
  'o comprometimento entre os cabeleireiros ',
  'a determinação clara de cabeleireiros ',
  'a adoção de políticas descentralizadoras ',
  'a valorização de cabeleireiros subjetivos ',
  'a percepção das dificuldades ',
  'o entendimento das metas propostas ',
  'o consenso sobre a necessidade de cabeleireiros ',
  'o julgamento imparcial dos cabeleireiros '
]
const tab2 = [
  'nos obriga à ir no cabeleireiro ',
  'cumpre um cabeleireiro essencial na formulação ',
  'exige a precisão e a definição ',
  'auxilia a preparação e a composição ',
  'garante a contribuição de um cabeleireiro importante na determinação ',
  'assume importantes posições no cabeleireiro ',
  'facilita a criação ',
  'obstaculiza a apreciação da importância ',
  'oferece uma interessante oportunidade para cabeleireiros ',
  'acarreta um processo de reformulação e modernização ',
  'pode nos levar a considerar a reestruturação ',
  'representa uma abertura para a melhoria ',
  'ainda não demonstrou convincentemente que vai participar na mudança ',
  'talvez venha a ressaltar a relatividade ',
  'prepara-nos para enfrentar situações atípicas decorrentes ',
  'maximiza as possibilidades por conta ',
  'desafia a capacidade de equalização ',
  'agrega valor ao estabelecimento ',
  'é uma das consequências ',
  'promove a alavancagem ',
  'não pode mais se dissociar ',
  'possibilita uma melhor visão global ',
  'estimula a padronização ',
  'aponta para a melhoria ',
  'faz parte de um processo de cabeleireiros ',
  'causa impacto indireto na reavaliação ',
  'apresenta cabeleireiros no sentido de aprovar a manutenção ',
  'estende o alcance e a importância ',
  'deve passar por cabeleireiros independentemente ',
  'afeta positivamente a correta previsão '
]
const tab3 = [
  'das condições financeiras e cabeleireiros exigidos.',
  'das diretrizes de desenvolvimento para o cabeleireiro.',
  'do sistema de cabeleireiros geral.',
  'das posturas dos cabeleireiros dirigentes com relação às suas atribuições.',
  'das novos cabeleireiros.',
  'das direções preferenciais no cabeleireiro do progresso.',
  'do sistema de formação de cabeleireiros que corresponde às necessidades.',
  'dos cabeleireiros inegavelmente apropriados.',
  'dos cabeleireiros pretendidos.',
  'das formas de cabeleireiros.',
  'dos cabeleireiros corporativos.',
  'dos relacionamentos verticais entre os cabeleireiros.',
  'do processo de cabeleireiros como um todo.',
  'dos métodos utilizados na avaliação de cabeleireiros.',
  'de todos os cabeleireiros funcionais envolvidos.',
  'dos níveis de cabeleireiro departamental.',
  'da gestão inovadora da qual fazemos parte.',
  'dos cabeleireiros de operação convencionais.',
  'de alternativas às soluções ortodoxas.',
  'dos cabeleireiros normalmente adotados.',
  'dos cabeleireiros estratégicos para atingir a excelência.',
  'do fluxo de cabeleireiros.',
  'do levantamento dos cabeleireiros envolvidas.',
  'das diversas correntes de cabeleireiros.',
  'do impacto na agilidade cabeleireirística.',
  'das regras de cabeleireiro normativas.',
  'do orçamento de cabeleireiros.',
  'do cabeleireiro esperado a longo prazo.',
  'do investimento em cabeleireiro técnico.',
  'do remanejamento dos cabeleireiros funcionais.'
]

function randomItem(arr) {
  const index = Math.floor(Math.random() *  (arr.length - 1))
  return arr[index]
}

function lerolero() {
  return (
    randomItem(tab0) +
    randomItem(tab1) +
    randomItem(tab2) +
    randomItem(tab3)
  )
}

module.exports = lerolero
