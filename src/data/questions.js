// 104 preguntas basadas en el "Pre-Marriage Awareness Inventory".
// Cada pregunta tiene texto y opciones en inglés (en) y español (es).
// "key" identifica la opción elegida y es lo que se compara entre ambos miembros
// de la pareja para calcular coincidencias/diferencias.

const q = (id, text, options) => ({ id, text, options });
const o = (key, en, es) => ({ key, en, es });

export const questions = [
  q(1, { en: 'I honestly feel that communication is one area we…', es: 'Sinceramente siento que la comunicación es un área en la que nosotros…' }, [
    o('a', 'are very good at', 'somos muy buenos'),
    o('b', 'are okay with', 'estamos bien'),
    o('c', 'should work harder on', 'deberíamos esforzarnos más'),
    o('d', 'have some problems with', 'tenemos algunos problemas'),
  ]),
  q(2, { en: "If I had to change one thing about my partner's physical appearance, it would be his/her…", es: 'Si tuviera que cambiar algo de la apariencia física de mi pareja, sería su…' }, [
    o('a', 'hair style', 'peinado'),
    o('b', 'height', 'estatura'),
    o('c', 'weight', 'peso'),
    o('d', 'style of dress', 'forma de vestir'),
    o('e', 'other', 'otro'),
  ]),
  q(3, { en: 'Our greatest monthly expense will be…', es: 'Nuestro mayor gasto mensual será…' }, [
    o('a', 'housing', 'la vivienda'),
    o('b', 'food', 'la comida'),
    o('c', 'car payment', 'el pago del auto'),
    o('d', 'credit card accounts', 'las tarjetas de crédito'),
    o('e', 'other', 'otro'),
  ]),
  q(4, { en: 'I would like our home to be decorated…', es: 'Me gustaría que nuestra casa estuviera decorada al estilo…' }, [
    o('a', 'Early American', 'americano antiguo'),
    o('b', 'Contemporary', 'contemporáneo'),
    o('c', 'Spanish American', 'hispanoamericano'),
    o('d', 'French Provincial', 'provenzal francés'),
    o('e', 'Mediterranean', 'mediterráneo'),
    o('f', 'Traditional', 'tradicional'),
    o('g', 'Other', 'otro'),
  ]),
  q(5, { en: 'When meeting new people my partner is…', es: 'Al conocer gente nueva, mi pareja es…' }, [
    o('a', 'outgoing', 'extrovertida/o'),
    o('b', 'sociable', 'sociable'),
    o('c', 'shy', 'tímida/o'),
  ]),
  q(6, { en: 'My fiance(e) readily shares her/his feelings with me', es: 'Mi pareja comparte sus sentimientos conmigo con facilidad' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(7, { en: "Sex is one subject we don't talk about much", es: 'El sexo es un tema del que casi no hablamos' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(8, { en: "My parents have met my fiance(e)'s parents", es: 'Mis padres han conocido a los padres de mi pareja' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(9, { en: 'My religious preference is…', es: 'Mi preferencia religiosa es…' }, [
    o('a', 'Baptist', 'bautista'),
    o('b', 'Lutheran', 'luterana'),
    o('c', 'Roman Catholic', 'católica romana'),
    o('d', 'Presbyterian', 'presbiteriana'),
    o('e', 'Methodist', 'metodista'),
    o('f', 'United Church of Christ', 'Iglesia Unida de Cristo'),
    o('g', 'Evangelical Free Church', 'Iglesia Evangélica Libre'),
    o('h', 'Covenant', 'Covenant'),
    o('i', 'Episcopalian', 'episcopal'),
    o('j', 'Pentecostal', 'pentecostal'),
    o('k', 'Mennonite', 'menonita'),
    o('l', 'Jewish', 'judía'),
    o('m', 'Other', 'otra'),
  ]),
  q(10, { en: "There are times when it is difficult to get my fiance(e)'s attention", es: 'Hay veces en que es difícil captar la atención de mi pareja' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(11, { en: 'My future spouse has…', es: 'Mi futuro/a esposo/a tiene…' }, [
    o('a', 'no habits or idiosyncrasies that annoy me', 'ninguna costumbre que me moleste'),
    o('b', 'one habit that annoys me', 'una costumbre que me molesta'),
    o('c', 'two or three habits that kind of bother me', 'dos o tres costumbres que me incomodan un poco'),
  ]),
  q(12, { en: 'Who will be the "bookkeeper" in your family?', es: '¿Quién llevará las cuentas en su familia?' }, [
    o('a', 'wife', 'la esposa'),
    o('b', 'husband', 'el esposo'),
    o('c', 'both', 'ambos'),
  ]),
  q(13, { en: 'My future spouse is more of the…', es: 'Mi futuro/a esposo/a es más bien del tipo…' }, [
    o('a', 'stay at home type', 'que prefiere quedarse en casa'),
    o('b', 'always on the go type', 'que siempre está en movimiento'),
  ]),
  q(14, { en: 'I am…', es: 'Yo soy…' }, [
    o('a', 'strong willed', 'de carácter firme'),
    o('b', 'flexible', 'flexible'),
  ]),
  q(15, { en: 'My fiance(e) attempts to "spare me" from his/her bad moods', es: 'Mi pareja intenta "protegerme" de sus malos momentos' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(16, { en: 'As I consider the physical, sexual aspects of marriage I feel…', es: 'Al pensar en los aspectos físicos y sexuales del matrimonio, me siento…' }, [
    o('a', 'nervous', 'nervioso/a'),
    o('b', 'excited/positive', 'emocionado/a y positivo/a'),
    o('c', 'uncertain', 'inseguro/a'),
    o('d', 'nothing special one way or another', 'sin sentimientos especiales al respecto'),
  ]),
  q(17, { en: 'I…', es: 'Yo…' }, [
    o('a', 'have spent a lot of time with my future in-laws', 'he pasado mucho tiempo con mis futuros suegros'),
    o('b', 'have been with them only occasionally', 'he estado con ellos solo ocasionalmente'),
    o('c', 'met a few of them once or twice', 'he conocido a algunos una o dos veces'),
    o('d', 'have not met any future in-laws', 'no he conocido a ningún futuro suegro'),
  ]),
  q(18, { en: 'I go to church…', es: 'Voy a la iglesia…' }, [
    o('a', 'regularly', 'regularmente'),
    o('b', 'on special days', 'en días especiales'),
    o('c', 'rarely', 'rara vez'),
  ]),
  q(19, { en: 'How much time do you spend together just talking?', es: '¿Cuánto tiempo pasan juntos simplemente hablando?' }, [
    o('a', 'a lot', 'mucho'),
    o('b', 'a moderate amount', 'una cantidad moderada'),
    o('c', 'less than I would like', 'menos de lo que me gustaría'),
    o('d', 'very little', 'muy poco'),
  ]),
  q(20, { en: 'My future spouse knows little about what I am like…', es: 'Mi futuro/a esposo/a sabe poco de cómo soy…' }, [
    o('a', 'early in the morning', 'temprano en la mañana'),
    o('b', 'late at night', 'tarde en la noche'),
    o('c', 'when I am in a bad mood', 'cuando estoy de mal humor'),
    o('d', 'when I am sick', 'cuando estoy enfermo/a'),
    o('e', 'more than one of the above', 'más de una de las anteriores'),
  ]),
  q(21, { en: 'I have some outstanding debts', es: 'Tengo algunas deudas pendientes' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(22, { en: 'I would rather…', es: 'Preferiría…' }, [
    o('a', 'go to a play', 'ir a una obra de teatro'),
    o('b', 'go to a concert', 'ir a un concierto'),
    o('c', 'go to a movie', 'ir al cine'),
    o('d', 'stay home and watch TV', 'quedarme en casa viendo TV'),
  ]),
  q(23, { en: 'My partner is…', es: 'Mi pareja es…' }, [
    o('a', 'strong willed', 'de carácter firme'),
    o('b', 'flexible', 'flexible'),
  ]),
  q(24, { en: 'I have seen my fiance(e) cry', es: 'He visto llorar a mi pareja' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(25, { en: 'What method of family planning will you use?', es: '¿Qué método de planificación familiar usarán?' }, [
    o('a', 'the pill', 'la píldora'),
    o('b', 'diaphragm', 'diafragma'),
    o('c', 'condom', 'condón'),
    o('d', 'I.U.D.', 'DIU'),
    o('e', 'calendar rhythm', 'método del ritmo/calendario'),
    o('f', 'sympto-thermic method', 'método sintotérmico'),
    o('g', 'no birth control', 'ningún método anticonceptivo'),
    o('h', "I'm not sure", 'no estoy seguro/a'),
    o('i', 'other', 'otro'),
  ]),
  q(26, { en: "My partner's parents are enthused about our coming marriage", es: 'Los padres de mi pareja están entusiasmados con nuestra próxima boda' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(27, { en: 'I regard my religious faith as being of great importance', es: 'Considero que mi fe religiosa es de gran importancia' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(28, { en: 'If my fiance(e) has a difficult decision to make she/he…', es: 'Cuando mi pareja tiene que tomar una decisión difícil…' }, [
    o('a', 'consults with me always', 'siempre me consulta'),
    o('b', 'consults with me occasionally', 'me consulta ocasionalmente'),
    o('c', 'works it through on his/her own', 'lo resuelve por su cuenta'),
  ]),
  q(29, { en: 'My partner uses alcohol and/or drugs…', es: 'Mi pareja consume alcohol y/o drogas…' }, [
    o('a', 'often', 'frecuentemente'),
    o('b', 'regularly', 'regularmente'),
    o('c', 'rarely', 'rara vez'),
    o('d', 'never', 'nunca'),
  ]),
  q(30, { en: 'I now have…', es: 'Actualmente tengo…' }, [
    o('a', 'no credit cards', 'ninguna tarjeta de crédito'),
    o('b', 'one credit card', 'una tarjeta de crédito'),
    o('c', 'more than one credit card', 'más de una tarjeta de crédito'),
  ]),
  q(31, { en: 'I would like to live…', es: 'Me gustaría vivir…' }, [
    o('a', 'in a large city', 'en una gran ciudad'),
    o('b', 'in a small town', 'en un pueblo pequeño'),
    o('c', 'in a suburb', 'en las afueras'),
    o('d', 'in the country', 'en el campo'),
  ]),
  q(32, { en: 'I would characterize my fiance(e) as…', es: 'Describiría a mi pareja como…' }, [
    o('a', 'aggressive', 'agresiva/o'),
    o('b', 'passive', 'pasiva/o'),
    o('c', 'assertive', 'asertiva/o'),
  ]),
  q(33, { en: "As I experience my partner's family of origin…", es: 'Por lo que veo en la familia de origen de mi pareja…' }, [
    o('a', 'they seem ready and willing to share feelings', 'parecen dispuestos y abiertos a compartir sentimientos'),
    o('b', "they seem open to sharing feelings but it doesn't happen often", 'parecen abiertos a compartir sentimientos, pero no ocurre muy seguido'),
    o('c', 'they would rather not talk about feelings', 'prefieren no hablar de sentimientos'),
    o('d', 'they tend to remain very surface in their conversations together', 'sus conversaciones tienden a quedarse en lo superficial'),
  ]),
  q(34, { en: 'I sometimes wonder if my partner will be satisfied with me sexually', es: 'A veces me pregunto si mi pareja estará satisfecha/o conmigo sexualmente' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(35, { en: 'My parents are enthused about our coming marriage', es: 'Mis padres están entusiasmados con nuestra próxima boda' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(36, { en: 'My fiance(e) and I are from the same religious background', es: 'Mi pareja y yo venimos del mismo trasfondo religioso' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(37, { en: 'My future spouse is…', es: 'Mi futuro/a esposo/a es…' }, [
    o('a', 'a better listener than talker', 'mejor para escuchar que para hablar'),
    o('b', 'a better talker than listener', 'mejor para hablar que para escuchar'),
  ]),
  q(38, { en: 'I use alcohol and/or drugs…', es: 'Yo consumo alcohol y/o drogas…' }, [
    o('a', 'often', 'frecuentemente'),
    o('b', 'regularly', 'regularmente'),
    o('c', 'rarely', 'rara vez'),
    o('d', 'never', 'nunca'),
  ]),
  q(39, { en: 'When we are married we will have…', es: 'Cuando estemos casados tendremos…' }, [
    o('a', 'no credit cards', 'ninguna tarjeta de crédito'),
    o('b', 'one credit card', 'una tarjeta de crédito'),
    o('c', 'more than one credit card', 'más de una tarjeta de crédito'),
  ]),
  q(40, { en: 'How many couples do you have as friends?', es: '¿Cuántas parejas tienen como amigos?' }, [
    o('a', 'none', 'ninguna'),
    o('b', 'one', 'una'),
    o('c', 'two', 'dos'),
    o('d', 'three or more', 'tres o más'),
  ]),
  q(41, { en: 'I am…', es: 'Yo soy…' }, [
    o('a', 'aggressive', 'agresivo/a'),
    o('b', 'passive', 'pasivo/a'),
    o('c', 'assertive', 'asertivo/a'),
  ]),
  q(42, { en: 'When it comes to sharing feelings I think we…', es: 'En cuanto a compartir sentimientos, creo que nosotros…' }, [
    o('a', 'share adequately', 'compartimos adecuadamente'),
    o('b', 'are kind of hesitant to share', 'somos algo reacios a compartir'),
    o('c', 'need to share more', 'necesitamos compartir más'),
    o('d', 'have real difficulty sharing', 'tenemos verdadera dificultad para compartir'),
  ]),
  q(43, { en: 'On the topic of sexuality, I think I am…', es: 'En el tema de la sexualidad, creo que estoy…' }, [
    o('a', 'well informed', 'bien informado/a'),
    o('b', 'basically knowledgeable', 'medianamente informado/a'),
    o('c', 'in need of more information', 'necesitando más información'),
  ]),
  q(44, { en: 'When I am with future in-laws I…', es: 'Cuando estoy con mis futuros suegros…' }, [
    o('a', 'worry about the impression I will make', 'me preocupa la impresión que voy a causar'),
    o('b', 'feel right at home', 'me siento como en casa'),
    o('c', 'am unsure how they feel about me', 'no estoy seguro/a de lo que sienten hacia mí'),
  ]),
  q(45, { en: 'I take part in some church activities besides regular services (i.e. choir, study groups, committees, etc.)', es: 'Participo en actividades de la iglesia además de los cultos regulares (coro, grupos de estudio, comités, etc.)' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(46, { en: 'Who tends to control your conversations?', es: '¿Quién tiende a controlar sus conversaciones?' }, [
    o('a', 'I do', 'yo'),
    o('b', 'my future spouse does', 'mi futuro/a esposo/a'),
  ]),
  q(47, { en: 'I am concerned about the impact that alcohol or drugs will have on our marriage', es: 'Me preocupa el impacto que el alcohol o las drogas puedan tener en nuestro matrimonio' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(48, { en: 'We agree about the use or non-use of credit, credit cards, loans', es: 'Estamos de acuerdo sobre el uso o no uso del crédito, tarjetas de crédito y préstamos' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(49, { en: 'I would rather…', es: 'Preferiría…' }, [
    o('a', 'go camping for the weekend', 'ir de campamento el fin de semana'),
    o('b', 'visit relatives for the weekend', 'visitar a familiares el fin de semana'),
    o('c', 'visit a city I have never been to before for the weekend', 'visitar una ciudad nueva el fin de semana'),
  ]),
  q(50, { en: 'My fiance(e)…', es: 'Mi pareja…' }, [
    o('a', 'is easily discouraged', 'se desanima fácilmente'),
    o('b', '"never says die"', 'nunca se rinde'),
  ]),
  q(51, { en: 'It is difficult to share my feelings with my partner when I am disappointed in her/him', es: 'Es difícil compartir mis sentimientos con mi pareja cuando estoy decepcionado/a de ella/él' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(52, { en: 'I have been sexually intimate before marriage and wonder how that will affect the future of our relationship', es: 'He tenido intimidad sexual antes del matrimonio y me pregunto cómo afectará esto el futuro de nuestra relación' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
    o('c', 'no response', 'prefiero no responder'),
  ]),
  q(53, { en: 'My parents influence our relationship…', es: 'Mis padres influyen en nuestra relación…' }, [
    o('a', 'a great deal', 'muchísimo'),
    o('b', 'sometimes', 'a veces'),
    o('c', 'not very often', 'no muy seguido'),
    o('d', 'rarely', 'rara vez'),
  ]),
  q(54, { en: 'We pray together', es: 'Oramos juntos' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(55, { en: 'The time/place we talk the most is…', es: 'El momento/lugar donde más hablamos es…' }, [
    o('a', 'in the car', 'en el auto'),
    o('b', 'when we eat together', 'cuando comemos juntos'),
    o('c', 'just sitting around', 'simplemente estando sentados'),
    o('d', 'when out on a date together', 'cuando salimos en una cita'),
    o('e', 'other', 'otro'),
  ]),
  q(56, { en: 'My future spouse intends to pursue a career', es: 'Mi futuro/a esposo/a piensa desarrollar una carrera profesional' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(57, { en: 'When it comes to spending, who is the most conservative?', es: '¿En cuanto a los gastos, quién es más conservador/a?' }, [
    o('a', 'female', 'la mujer'),
    o('b', 'male', 'el hombre'),
  ]),
  q(58, { en: 'My partner and I have a hobby that we share', es: 'Mi pareja y yo tenemos un pasatiempo en común' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(59, { en: 'I…', es: 'Yo…' }, [
    o('a', 'am easily discouraged', 'me desanimo fácilmente'),
    o('b', '"never say die"', 'nunca me rindo'),
  ]),
  q(60, { en: "I know my fiance(e)'s dreams for the future concerning work, relationships and our marriage/family life", es: 'Conozco los sueños de mi pareja para el futuro en cuanto al trabajo, las relaciones y nuestra vida matrimonial/familiar' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(61, { en: 'Sexual fidelity in marriage is…', es: 'La fidelidad sexual en el matrimonio es…' }, [
    o('a', 'very important', 'muy importante'),
    o('b', 'important', 'importante'),
    o('c', 'not so important', 'no tan importante'),
    o('d', 'optional', 'opcional'),
    o('e', 'irrelevant', 'irrelevante'),
  ]),
  q(62, { en: 'It is alright to receive financial support from parents and/or relatives after marriage', es: 'Está bien recibir apoyo económico de los padres y/o familiares después del matrimonio' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(63, { en: 'We are now involved in a church together', es: 'Actualmente participamos juntos en una iglesia' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(64, { en: 'One thing we seldom discuss is…', es: 'Algo que casi no discutimos es…' }, [
    o('a', 'religion', 'la religión'),
    o('b', 'sex', 'el sexo'),
    o('c', 'money', 'el dinero'),
    o('d', 'in-laws', 'los suegros'),
    o('e', 'emotions', 'las emociones'),
    o('f', 'other', 'otro'),
  ]),
  q(65, { en: 'I intend to pursue a career', es: 'Pienso desarrollar una carrera profesional' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(66, { en: 'We will have…', es: 'Tendremos…' }, [
    o('a', 'a joint checking account', 'una cuenta corriente conjunta'),
    o('b', 'individual accounts', 'cuentas individuales'),
    o('c', 'no checking account', 'ninguna cuenta corriente'),
  ]),
  q(67, { en: 'We tend to participate in the interests and activities of my fiance(e) more often than in mine', es: 'Solemos participar más en los intereses y actividades de mi pareja que en los míos' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(68, { en: 'When it comes to decision-making as a couple…', es: 'Al tomar decisiones como pareja…' }, [
    o('a', 'I generally have the most influence', 'generalmente yo tengo más influencia'),
    o('b', 'my partner generally has the most influence', 'generalmente mi pareja tiene más influencia'),
  ]),
  q(69, { en: 'I have experienced or know of a time when my fiance(e) has been afraid', es: 'He vivido o conozco un momento en que mi pareja ha sentido miedo' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(70, { en: 'In our sexual intimacy I feel like an object—or—I am concerned that in marriage I may feel like an object sexually rather than as a person', es: 'En nuestra intimidad sexual me siento como un objeto, o me preocupa sentirme así en el matrimonio, en lugar de sentirme como una persona' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
    o('c', 'no response', 'prefiero no responder'),
  ]),
  q(71, { en: 'I think my parents will…', es: 'Creo que mis padres…' }, [
    o('a', 'avoid involvement in our affairs', 'evitarán involucrarse en nuestros asuntos'),
    o('b', "want to know what's going on with us in all circumstances", 'querrán saber qué pasa con nosotros en toda circunstancia'),
    o('c', 'may have a tendency to offer us too much advice', 'tenderán a darnos demasiados consejos'),
  ]),
  q(72, { en: 'I am sometimes concerned about how our different religious traditions will fit together in marriage', es: 'A veces me preocupa cómo encajarán nuestras diferentes tradiciones religiosas en el matrimonio' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(73, { en: 'I wish we would talk more about…', es: 'Me gustaría que habláramos más sobre…' }, [
    o('a', 'our feelings', 'nuestros sentimientos'),
    o('b', 'financial matters', 'asuntos financieros'),
    o('c', 'future plans', 'planes futuros'),
    o('d', 'in-laws', 'los suegros'),
    o('e', 'sex', 'el sexo'),
    o('f', 'religious or spiritual matters', 'asuntos religiosos o espirituales'),
    o('g', 'resolving conflicts', 'cómo resolver conflictos'),
    o('h', 'family plans', 'planes familiares'),
    o('i', 'other', 'otro'),
  ]),
  q(74, { en: 'Who will be the wage earner in your family?', es: '¿Quién será el sostén económico de la familia?' }, [
    o('a', 'wife', 'la esposa'),
    o('b', 'husband', 'el esposo'),
    o('c', 'both', 'ambos'),
  ]),
  q(75, { en: 'Our monthly housing cost including utilities will be…', es: 'Nuestro gasto mensual de vivienda, incluyendo servicios, será…' }, [
    o('a', 'Less than $250', 'menos de $250'),
    o('b', '$250 - $500', '$250 - $500'),
    o('c', '$500 - $750', '$500 - $750'),
    o('d', '$750 - $1,000', '$750 - $1,000'),
    o('e', 'more than $1,000', 'más de $1,000'),
  ]),
  q(76, { en: 'I would rather…', es: 'Preferiría…' }, [
    o('a', 'go to a party', 'ir a una fiesta'),
    o('b', 'go to dinner with my fiance(e)', 'ir a cenar con mi pareja'),
  ]),
  q(77, { en: 'Who tends to have more control or power in your relationship?', es: '¿Quién tiende a tener más control o poder en su relación?' }, [
    o('a', 'woman', 'la mujer'),
    o('b', 'man', 'el hombre'),
    o('c', 'neither, absolutely equal', 'ninguno, es completamente igualitario'),
  ]),
  q(78, { en: 'I have seen my fiance(e) least when he/she is…', es: 'He visto menos a mi pareja cuando está…' }, [
    o('a', 'discouraged', 'desanimada/o'),
    o('b', 'angry', 'enojada/o'),
    o('c', 'happy', 'feliz'),
    o('d', 'sad or depressed', 'triste o deprimida/o'),
    o('e', 'other', 'otro'),
  ]),
  q(79, { en: "My future spouse takes care of her/his body through exercise, nutrition and rest…", es: 'Mi futuro/a esposo/a cuida su cuerpo mediante ejercicio, alimentación y descanso…' }, [
    o('a', 'most all the time', 'casi todo el tiempo'),
    o('b', 'average', 'de manera regular'),
    o('c', 'could improve', 'podría mejorar'),
    o('d', "I am concerned about certain aspects of my fiance(e)'s physical health", 'me preocupan ciertos aspectos de la salud física de mi pareja'),
  ]),
  q(80, { en: 'Conflict is not a good thing in marriage', es: 'El conflicto no es algo bueno en el matrimonio' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(81, { en: 'When will you start a family?', es: '¿Cuándo comenzarán su familia?' }, [
    o('a', 'we do not intend to have children', 'no pensamos tener hijos'),
    o('b', 'we already have, or are expecting a child', 'ya tenemos, o estamos esperando, un hijo'),
    o('c', 'as soon as we are married', 'tan pronto nos casemos'),
    o('d', 'in a year or two', 'en uno o dos años'),
    o('e', 'when we have both finished our educations', 'cuando ambos terminemos nuestros estudios'),
    o('f', "I'm not sure", 'no estoy seguro/a'),
    o('g', 'other', 'otro'),
  ]),
  q(82, { en: 'We have made an attempt to make a budget for us to follow', es: 'Hemos intentado hacer un presupuesto para seguir' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(83, { en: 'I know…', es: 'Yo conozco…' }, [
    o('a', "most of my fiance(e)'s friends", 'a la mayoría de los amigos de mi pareja'),
    o('b', 'few of his/her friends', 'a pocos de sus amigos'),
    o('c', "none of her/his friends", 'a ninguno de sus amigos'),
  ]),
  q(84, { en: "My fiance(e) is usually open to hearing others' opinions and/or changing his/her mind on an issue through discussion.", es: 'Mi pareja suele estar abierta a escuchar otras opiniones y/o cambiar de parecer mediante el diálogo' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(85, { en: 'When my partner is upset she/he…', es: 'Cuando mi pareja está molesta…' }, [
    o('a', 'gets crabby', 'se pone de mal humor'),
    o('b', 'gets depressed', 'se deprime'),
    o('c', 'tries not to show it', 'trata de no demostrarlo'),
    o('d', 'gets violent', 'se pone violenta/o'),
    o('e', 'other', 'otro'),
  ]),
  q(86, { en: 'When we disagree, my first reaction is to…', es: 'Cuando estamos en desacuerdo, mi primera reacción es…' }, [
    o('a', 'argue verbally', 'discutir verbalmente'),
    o('b', 'use the "silent treatment"', 'usar la "ley del hielo"'),
    o('c', 'give in', 'ceder'),
  ]),
  q(87, { en: 'How many children would you like to have?', es: '¿Cuántos hijos les gustaría tener?' }, [
    o('a', 'none', 'ninguno'),
    o('b', 'one', 'uno'),
    o('c', 'two', 'dos'),
    o('d', 'three', 'tres'),
    o('e', 'more than three', 'más de tres'),
  ]),
  q(88, { en: 'We have looked into health and life insurance together', es: 'Hemos investigado juntos sobre seguros de salud y de vida' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(89, { en: 'I would rather…', es: 'Preferiría…' }, [
    o('a', 'go to an art show', 'ir a una exposición de arte'),
    o('b', 'go to a sporting event', 'ir a un evento deportivo'),
    o('c', 'go on a picnic', 'ir de picnic'),
  ]),
  q(90, { en: 'My partner is…', es: 'Mi pareja es…' }, [
    o('a', 'open-minded', 'de mente abierta'),
    o('b', 'very opinionated', 'muy aferrada/o a sus opiniones'),
    o('c', "set in his/her ways", 'de costumbres muy arraigadas'),
  ]),
  q(91, { en: 'A tactic I use when we argue is…', es: 'Una táctica que uso cuando discutimos es…' }, [
    o('a', 'mentioning an old boyfriend/girlfriend', 'mencionar a un ex novio/a'),
    o('b', 'bringing up past mistakes', 'sacar a relucir errores del pasado'),
    o('c', 'not saying anything', 'no decir nada'),
    o('d', 'sarcasm', 'el sarcasmo'),
    o('e', 'raising my voice', 'levantar la voz'),
    o('f', 'other', 'otra'),
    o('g', 'I never use unfair tactics in conflict', 'nunca uso tácticas injustas en un conflicto'),
  ]),
  q(92, { en: 'Who will be the principal disciplinarian of children?', es: '¿Quién será el principal encargado de disciplinar a los hijos?' }, [
    o('a', 'husband', 'el esposo'),
    o('b', 'wife', 'la esposa'),
    o('c', 'both', 'ambos'),
  ]),
  q(93, { en: 'My fiance(e) and I have made wills', es: 'Mi pareja y yo hemos hecho testamento' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(94, { en: 'We enjoy…', es: 'Disfrutamos…' }, [
    o('a', 'most of the same social and recreational activities', 'la mayoría de las mismas actividades sociales y recreativas'),
    o('b', 'some of the same social and recreational activities', 'algunas de las mismas actividades sociales y recreativas'),
    o('c', 'few of the same social and recreational activities', 'pocas de las mismas actividades sociales y recreativas'),
  ]),
  q(95, { en: "I notice things about how my partner relates to me that are similar to the way her/his parents relate to one another", es: 'Noto que la forma en que mi pareja se relaciona conmigo se parece a cómo se relacionan sus padres entre sí' }, [
    o('a', 'yes', 'sí'),
    o('b', 'no', 'no'),
  ]),
  q(96, { en: 'A tactic my future spouse uses in arguments is…', es: 'Una táctica que mi futuro/a esposo/a usa en las discusiones es…' }, [
    o('a', 'mentioning an old boyfriend/girlfriend', 'mencionar a un ex novio/a'),
    o('b', 'bringing up past mistakes', 'sacar a relucir errores del pasado'),
    o('c', 'not saying anything', 'no decir nada'),
    o('d', 'sarcasm', 'el sarcasmo'),
    o('e', 'raising his/her voice', 'levantar la voz'),
    o('f', 'other', 'otra'),
    o('g', 'she/he never uses unfair tactics in conflict', 'nunca usa tácticas injustas en un conflicto'),
  ]),
  q(97, { en: 'After we are married we will go out on a "date"…', es: 'Después de casarnos, saldremos en una "cita"…' }, [
    o('a', 'once a week or more', 'una vez a la semana o más'),
    o('b', 'twice a month', 'dos veces al mes'),
    o('c', 'once a month', 'una vez al mes'),
    o('d', 'less than once a month', 'menos de una vez al mes'),
  ]),
  q(98, { en: 'There are some social/recreational activities that my partner is involved in that I would rather not participate in with him/her', es: 'Hay algunas actividades sociales o recreativas de mi pareja en las que preferiría no participar' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
  q(99, { en: 'In general I think other people find my partner to be…', es: 'En general, creo que otras personas ven a mi pareja como…' }, [
    o('a', 'easy to get to know', 'fácil de conocer'),
    o('b', 'fun to be around', 'divertida/o para estar cerca'),
    o('c', 'difficult to get close to', 'difícil de acercarse'),
    o('d', 'reserved and quiet', 'reservada/o y callada/o'),
    o('e', 'somewhat difficult to get along with', 'algo difícil de llevarse bien con'),
  ]),
  q(100, { en: 'When I consider marriage I am most concerned about…', es: 'Al pensar en el matrimonio, lo que más me preocupa es…' }, [
    o('a', 'becoming tied down', 'sentirme atado/a'),
    o('b', 'money', 'el dinero'),
    o('c', 'being a parent', 'ser padre/madre'),
    o('d', 'finding a place to live', 'encontrar un lugar donde vivir'),
    o('e', 'remaining happy', 'seguir siendo feliz'),
    o('f', "I'm not sure", 'no estoy seguro/a'),
    o('g', 'other', 'otro'),
  ]),
  q(101, { en: 'After we are married we will live…', es: 'Después de casarnos viviremos…' }, [
    o('a', 'in a house', 'en una casa'),
    o('b', 'in an apartment', 'en un departamento'),
    o('c', 'with relatives', 'con familiares'),
    o('d', "I'm not sure", 'no estoy seguro/a'),
    o('e', 'other', 'otro'),
  ]),
  q(102, { en: 'When it comes to marriage I think my partner is most concerned about…', es: 'En cuanto al matrimonio, creo que a mi pareja le preocupa más…' }, [
    o('a', 'becoming tied down', 'sentirse atada/o'),
    o('b', 'money', 'el dinero'),
    o('c', 'being a parent', 'ser padre/madre'),
    o('d', 'finding a place to live', 'encontrar un lugar donde vivir'),
    o('e', 'remaining happy', 'seguir siendo feliz'),
    o('f', "I'm not sure", 'no está segura/o'),
    o('g', 'other', 'otro'),
  ]),
  q(103, { en: 'After we are married we will spend an average of (not including sleep)…', es: 'Después de casarnos pasaremos en promedio (sin contar el sueño)…' }, [
    o('a', 'two hours per day together', 'dos horas al día juntos'),
    o('b', 'four hours per day together', 'cuatro horas al día juntos'),
    o('c', 'six hours per day together', 'seis horas al día juntos'),
    o('d', 'more than six hours per day together', 'más de seis horas al día juntos'),
  ]),
  q(104, { en: 'I am solving some problems by getting married', es: 'Estoy resolviendo algunos problemas al casarme' }, [
    o('a', 'agree', 'de acuerdo'),
    o('b', 'disagree', 'en desacuerdo'),
  ]),
];

export const TOTAL_QUESTIONS = questions.length;
