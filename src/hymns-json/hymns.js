const hymns = [
  {
    id: 0,
    title: "La alegría",
    lyrics: "<p>La alegría está en el corazón</p>\n<p>De quien ya conoce a Jesús</p>\n<p>La verdadera paz está en aquel</p>\n<p>Que ya conoce a Jesús.</p>\n<h3>Coro</h3>\n<p>El sentimiento más precioso</p>\n<p>Que viene de nuestro Señor</p>\n<p>Es el amor que solo tiene</p>\n<p>Quien conoce a Jesús</p>\n<p>¡Aleluya! ¡Amén!</p>\n<p><br></p>\n<p>Puedes cruzar los montes</p>\n<p>Y escalar las montañas</p>\n<p>¡Aleluya! ¡Aleluya!</p>\n<p>Puedes cruzar los montes</p>\n<p>Y escalar las montañas</p>\n<p>¡Aleluya! ¡Aleluya!</p>"
  },
  {
    id: 1,
    title: "Id con Cristo",
    lyrics: "<p>Id con Cristo caminando sobre el agua</p>\n<p>Tú lo podrás si te dejas llevar.</p>\n<p>Puedes ir con Cristo la tormenta puede Él calmar</p>\n<p>Id con cristo te salvará</p>\n<p>\n    <br>\n</p>\n<p>Si te sientes desdichado</p>\n<p>Con profundo vacío</p>\n<p>Solo en Cristo hallarás</p>\n<p>El Camino de Vida</p>\n<p>Acéptale hoy en tu corazón</p>\n<p>Y verás entonces tu vida cambiar.</p>"
  },
  {
    id: 2,
    title: "Puedes confiar en el Señor",
    lyrics: "<p>Puedes confiar en el Señor</p>\n<p>Que Él te va a cuidar</p>\n<p>Puedes confiar en el Señor</p>\n<p>Que Él te va a cuidar</p>\n<h3>Coro</h3>\n<p>Si el sol llegara a obscurecer</p>\n<p>Y no brilla más</p>\n<p>Igual confía en el Señor</p>\n<p>Que Él te va a cuidar</p>\n<p>\n    <br>\n</p>\n<p>Puedes descansar</p>\n<p>Puedes descansar</p>\n<p>Que una mansión</p>\n<p>Cristo te dará</p>"
  },
  {
    id: 3,
    title: "Dios está aquí",
    lyrics: "<p>Dios está aquí</p>\n<p>Es tan cierto como el aire que respiro</p>\n<p>Es tan cierto como la mañana se levanta el sol</p>\n<p>Es tan cierto como que le canto y me puede oír.</p>\n<p>\n    <br>\n</p>\n<p>Lo puedes sentir en este mismo</p>\n<p>Lo puedes sentir muy cerca de tu corazón</p>\n<p>Te puede ayudar en ese problema que tienes</p>\n<p>Jesús está aquí, si tu quieres lo puedes sentir.</p>"
  },
  {
    id: 4,
    title: "Sobre Todo",
    lyrics: "<p>Sobre la fuerza de todo rey</p>\n<p>Sobre natura y toda creación</p>\n<p>Aun mas sabio que todo humano aquí</p>\n<p>Fuiste antes de la creación.</p>\n<p>Y sobre reino y tronos mil</p>\n<p>Y maravillas aun sin descubrir</p>\n<p>Sobre riquezas y tesoro terrenal</p>\n<p>Nada es imposible para Ti</p>\n<h3>Coro</h3>\n<p>Al morir solo en esa cruz</p>\n<p>Me diste así razón para vivir</p>\n<p>Siendo Tú, el Hijo del gran Rey </p>\n<p>Moriste así, pensando en mi Más que en Ti.</p>"
  },
  {
    id: 5,
    title: "El poder de tu amor",
    lyrics: "<p>Dios me rindo a Ti cambia hoy mi corazón</p>\n<p>Renuévame Señor con tu tierno amor</p>\n<p>Yo reconozco que debilidades hay en mi ser</p>\n<p>Pues todo cambiará con el Poder de tu Amor.</p>\n<h3>Coro</h3>\n<p>Abrázame que tu amor me cubra</p>\n<p>Junto a Ti quiero siempre estar.</p>\n<p>Y al despertar levantaré mis alas</p>\n<p>El vuelo emprenderé y tú me guiarás</p>\n<p>Con el Poder de tu Amor.</p>\n<p>\n    <br>\n</p>\n<p>Cada día más quiero conocer de tu amor</p>\n<p>De tu Espíritu lléname, Señor.</p>\n<p>Y renuévame haz tu voluntad en mi ser</p>\n<p>Dirígeme, Señor, por el poder de tu amor</p>"
  },
  {
    id: 6,
    title: "Tu eres mi respirar",
    lyrics: "<p>Tu eres mi respirar</p>\n<p>Tu eres mi respirar</p>\n<p>Dios tu presencia vive en mi Eres mi pan Señor</p>\n<p>Eres mi pan Señor</p>\n<p>Dios tu palabra vive en mi</p>\n<h3>Coro</h3>\n<p>Y yo te anhelo Señor</p>\n<p>Y estoy perdido sin Ti</p>"
  },
  {
    id: 7,
    title: "Dios tu nombre exaltaré",
    lyrics: "<p>Dios tu Nombre exaltaré</p>\n<p>Y yo canto tus bondades</p>\n<p>Yo Contigo soy feliz</p>\n<p>Te doy gracias por salvarme.</p>\n<h3>Coro</h3>\n<p>Del cielo viniste Tú a Redimir</p>\n<p>Desde la tierra a la cruz a perdonar</p>\n<p>De la cruz a morir, de morir a la Luz</p>\n<p>Dios tu Nombre exaltaré.</p>"
  },
  {
    id: 8,
    title: "Vine a adorarte",
    lyrics: "<p>Tu eres la luz que brilló en las tinieblas</p>\n<p>Abrió mis ojos pude ver.</p>\n<p>Mi corazón adora tu hermosura</p>\n<p>Esperanza de vida eres Tú.</p>\n<h3>Coro</h3>\n<p>Vine a adorarte vine a postrarme</p>\n<p>Vine a decir que eres mi Dios.</p>\n<p>Sólo tu eres santo, solo tu eres digno</p>\n<p>Eres asombroso para mi.</p>\n<p>\n    <br>\n</p>\n<p>Tu eres el rey grandemente exaltado</p>\n<p>Glorioso por siempre Señor.</p>\n<p>El mundo tu creaste y humilde viniste</p>\n<p>Pobre te hiciste por amor.</p>\n<p>\n    <br>\n</p>\n<h3>Puente</h3>\n<p>Jamás sabré cuánto costó</p>\n<p>Ver mi maldad sobre esa cruz.</p>\n<p>Jamás sabré cuánto costó</p>\n<p>Ver mi maldad sobre esa cruz.</p>\n"
  },
  {
    id: 9,
    title: "Cante al Señor",
    lyrics: "<p>Mi cristo, mi rey nadie es como Tú</p>\n<p>Toda mi vida quiero exaltar las maravillas de tu amor.</p>\n<p>Consuelo, refugio, torre de fuerza y poder</p>\n<p>Todo mi ser, lo que yo soy nunca deje de adorar.</p>\n<h3>Coro</h3>\n<p>Cante al Señor toda la creación</p>\n<p>Honra, poder, majestad sea al rey</p>\n<p>Montes caerán y el mar rugirá al sonar</p>\n<p>De tu nombre</p>\n<p>Canto con gozo al mirar tu poder</p><p> Por siempre yo te amaré y diré:</p>\n<p>Incomparables promesas me das Señor.</p>"
  },
  {
    id: 10,
    title: "Guíame Señor",
    lyrics: "<p>Guíame Señor, no me dejes ir</p>\n<p>Yo quiero regresar a Ti</p>\n<p>Y oír tu tierna voz decir</p>\n<p>Tu amigo soy eso anhelo hoy</p>\n<p>Pues nadie más me puede dar</p>\n<p>El dulce amor que tu me das</p>\n<p>Guíame Señor quiero regresar</p>\n<h3>Coro</h3>\n<p>Volverte a amar</p>\n<p>Volver a mi hogar</p>\n<p>Volverte a amar</p>\n<p>Como me amas Tú.</p>"
  },
  {
    id: 11,
    title: "Se trata de Ti",
    lyrics: "<p>Melodías van y vienen sin cesar Y hoy estoy aquí.</p>\n<p>Mi deseo es traerte lo mejor un incienso a Ti.</p>\n<h3>Pre-coro</h3>\n<p>Más que una dulce canción yo te traigo Señor</p>\n<p>Tu me conoces muy bien no solo las apariencias Sino dentro de mi Tú miras mi corazón.</p>\n<h3>Coro</h3>\n<p>Y vengo hoy a adorarte mi Cristo</p>\n<p>Pues se trata de Ti, tan solo de Ti Jesús Perdona si olvide el motivo</p>\n<p>Pues se trata de Ti, tan sólo de Ti Jesús.</p>\n<p>\n    <br>\n</p>\n<p>Mi eterno Rey,</p>\n<p>¿cómo expresar lo que eres Tú?</p>\n<p>Todo lo que soy te lo debo a Ti</p>\n<p>Y por eso hoy</p>"
  },
  {
    id: 12,
    title: "Eres mi todo",
    lyrics: "<p>Eres mi fuerza y mi poder</p>\n<p>El gran tesoro que busqué</p>\n<p>Eres mi todo Dios.</p>\n<p>Perla de precio sin igual</p>\n<p>Nunca tu amor podré dejar</p>\n<p>Eres mi todo Dios</p>\n<h3>Coro</h3>\n<p>Cristo, redentor</p>\n<p>Digno de alabar</p>\n<p>Cristo, salvador</p>\n<p>Digno de adorar</p>\n<p>\n    <br>\n</p>\n<p>En sequedad o en tentación</p>\n<p>Tú me sostienes mi Señor</p>\n<p>Eres mi todo Dios</p>\n<p>Toma mi vida mi Señor</p>\n<p>Yo te la ofrezco Salvador Porque te amo Dios.</p>"
  },
  {
    id: 13,
    title: "Agnus Dei",
    lyrics: "<p>Aleluya, Aleluya</p> <p>\n</p> <p>Te adoramos Se&ntilde;or nuestro Rey</p> <p>\n</p> <p>Aleluya, Aleluya</p> <p>\n</p> <p>Te adoramos Se&ntilde;or nuestro Rey</p> <p>\n</p> <p>Aleluya</p> <p>\n</p> <h3>Coro</h3> <p>\n</p> <p>Santo, Santo, Tu eres Santo Mi Salvador</p> <p>\n</p> <p>Digno eres T&uacute;, Digno eres T&uacute;</p> <p>\n</p> <p>T&uacute; eres Santo, Santo</p> <p>\n</p> <p>Tu eres Santo Mi Salvador</p> <p>\n</p> <p>Digno eres T&uacute;, Digno eres T&uacute;</p> <p>\n</p> <p>Am&eacute;n.</p> <p>\n</p> <h3>Estrofa</h3> <p>\n</p><p>Aleluya, Aleluya</p> <p>\n</p> <p>Te adoramos Se&ntilde;or nuestro Rey</p> <p>\n</p> <p>Aleluya, Aleluya</p> <p>\n</p> <p>Te adoramos Se&ntilde;or nuestro Rey</p> <p>\n</p> <p>Aleluya</p> <p>\n</p> <h3>Coro</h3> <p>\n</p> <p>Santo, Santo, Tu eres Santo Mi Salvador</p> <p>\n</p> <p>Digno eres T&uacute;, Digno eres T&uacute;</p> <p>\n</p> <p>T&uacute; eres Santo, Santo</p> <p>\n</p> <p>Tu eres Santo Mi Salvador</p> <p>\n</p> <p>Digno eres T&uacute;, Digno eres T&uacute;</p> <p>\n</p> <h3>Final</h3> <p>\n</p> <p>T&uacute; eres Santo, SANTO, <strong>SANTO</strong></p>"
  },
  {
    id: 14,
    title: "Cantaré de tu amor por siempre",
    lyrics: "<p>Sobre los montes y el mar, el río corre con tu amor, Y abriré mi corazón y gozaré tu libertad.</p>\n<p>Feliz me siento oh Señor, pues sé que a tu lado estoy,</p>\n<p>Levanto hoy mi voz y cantaré de tu amor.</p>\n<h3>Coro</h3>\n<p>Cantaré de tu amor por siempre.</p>\n<p>Cantaré de tu amor por siempre.</p>\n<p>Cantaré de tu amor por siempre.</p>\n<p>Cantaré de tu amor por siempre.</p>"
  },
  {
    id: 15,
    title: "Tu Poder",
    lyrics: "<p>Queremos hoy pedir señor, tu poder, tu poder</p>\n<p>No hay otra forma de avanzar tu poder, tu poder</p>\n<h3>Coro</h3>\n<p>Con tu poder nos haremos fuertes</p>\n<p>Con tu poder vamos a vencer</p>\n<p>En tu poder está nuestra esperanza</p>\n<p>Envía tu poder</p>\n<p>\n    <br>\n</p>\n<p>Estamos tan cansados ya, oh Señor, Danos poder</p>\n<p>Renueva nuestro corazón, con poder, danos poder</p>"
  },
  {
    id: 16,
    title: "Este es mi deseo",
    lyrics: "<p>Este es mi deseo Honrarte a Ti.</p>\n<p>Con todo mi ser Te adoro a Ti.</p>\n<p>Con todas mis fuerzas Te alabaré.</p>\n<p>Mi adoración eres Tú.</p>\n<h3>Coro</h3>\n<p>Hoy te rindo mi ser</p>\n<p>Te doy mi corazón.</p>\n<p>Yo vivo para Ti.</p>\n<p>En cada palpitar</p>\n<p>Mientras haya aliento en mí</p>\n<p>Dios haz Tu obra en mí.</p>"
  },
  {
    id: 0,
    title: "",
    lyrics: ""
  },
  {
    id: 17,
    title: "Fija tus ojos en Cristo",
    lyrics: "<p>Fija tus ojos en Cristo</p>\n<p>Tan lleno de gracia y amor</p>\n<p>Y lo terrenal sin valor será</p>\n<p>A la luz del glorioso Señor</p>"
  },
  {
    id: 18,
    title: "Abre mis ojos oh Cristo",
    lyrics: "<p>Abre mis ojos, oh, Cristo</p> <p>\n</p> <p>Abre mis ojos, Se&ntilde;or</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> </br> <p>Abre mis ojos, oh, Cristo</p> <p>\n</p> <p>Abre mis ojos, Se&ntilde;or</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <h3>Coro</h3> <p>\n</p> <p>Yo quiero verte enaltecido oh Dios</p> <p>\n</p> <p>Radiante en toda tu gloria</p> <p>\n</p> <p>Derrama tu amor y poder</p> <p>\n</p> <p>Sobre tu pueblo Padre Santo</p> <p>\n</p> <h3>Estrofa</h3> <p>\n</p> <p>Abre mis ojos, oh, Cristo</p> <p>\n</p> <p>Abre mis ojos, Se&ntilde;or</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> </br> <p>Abre mis ojos, oh, Cristo</p> <p>\n</p> <p>Abre mis ojos, Se&ntilde;or</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> <h3>Coro</h3> <p>\n</p> <p>Yo quiero verte enaltecido oh Dios</p> <p>\n</p> <p>Radiante en toda tu gloria</p> <p>\n</p> <p>Derrama tu amor y poder</p> <p>\n</p> <p>Sobre tu pueblo Padre Santo</p> <p>\n</p> <h3>Puente</h3> <p>\n</p> <p>Santo, santo, santo</p> <p>\n</p> <p>Santo, santo, santo</p> <p>\n</p> <p>Santo, santo, santo</p> <p>\n</p> <p>Yo quiero verte</p> <p>\n</p> </br> <p>Santo, santo, santo</p> <p>\n</p> <p>Santo, santo, santo</p> <p>\n</p> <p>Santo, santo, santo</p> <p>\n</p> <p>Yo quiero verte</p>"
  },
  {
    id: 19,
    title: "Jesucristo Basta",
    lyrics: "<p>Nuestros corazones<br />Insaciables son<br />Hasta que conocen<br />A su salvador</p> <p>Tal y como somos, nos am&oacute;<br />Hoy, nos acercamos sin temor</p> <p>&Eacute;l es el agua que al beber<br />Nunca m&aacute;s tendremos sed<br />Jesucristo basta<br />Jesucristo basta</p> <p>Mi castigo recibi&oacute;<br />Y Su herencia me entreg&oacute;<br />Jesucristo basta<br />Jesucristo basta</p> <p>Fuimos alcanzados<br />Por Su gran amor<br />Con brazos abiertos<br />Nos recibe hoy</p> <p>Tal y como somos, nos am&oacute;<br />Hoy, nos acercamos sin temor</p> <p>&Eacute;l es el agua que al beber<br />Nunca m&aacute;s tendremos sed<br />Jesucristo basta<br />Jesucristo basta</p> <p>Mi castigo recibi&oacute;<br />Y Su herencia me entreg&oacute;<br />Jesucristo basta<br />Jesucristo basta</p> <p>Yeh, uoh<br />Jesucristo basta<br />Uoh, uoh</p> <p>Tal y como somos, nos am&oacute;<br />Hoy, nos acercamos sin temor, sin temor<br />Tal y como somos, nos am&oacute;, ooh<br />Hoy, nos acercamos sin temor</p> <p>Y &eacute;l es el agua que al beber<br />Nunca m&aacute;s tendremos sed<br />Jesucristo basta<br />Jesucristo basta</p> <p>Mi castigo recibi&oacute;<br />Y Su herencia me entreg&oacute;<br />Jesucristo basta<br />Jesucristo basta</p> <p>Yeh, uoh<br />Jesucristo basta<br />Yeh (uoh)</p> <p>Ahora hay un futuro<br />Y esperanza fiel<br />En Su amor, confiamos<br />Hay descanso en &Eacute;l</p>"
  },
  {
    id: 20,
    title: "Vasijas rotas",
    lyrics: "<p>Mi alma estaba rota y herida</p>\n<p>Pero, tu gracia la restauró</p>\n<p>Manos vacías que tú llenaste</p>\n<p>Soy libre en ti, soy libre en ti</p>\n<h3>Coro</h3>\n<p>Sublime gracia del Señor</p>\n<p>Que a un pecador salvó</p>\n<p>Fui ciego, mas, hoy veo yo</p>\n<p>Perdido y él me halló</p>\n<p>Ahora puedo ver</p>\n<p>Oh, puedo ver sus ojos de amor</p>\n<p>Quebrantado fue</p>\n<p>Para darnos su salvación</p>\n<p>\n    <br>\n</p>\n<p>Tú no me juzgas por mis fracasos</p>\n<p>Tú me aceptas tal como soy</p>\n<p>Toma mi vida como vasija</p>\n<p>Para mostrar tu gloria en mí</p>"
  },
  {
    id: 21,
    title: "Digno y Santo",
    lyrics: "<p>Digno y Santo el cordero</p>\n<p>Inmolado en la cruz</p>\n<p>Nuevo canto levantaremos</p>\n<p>Al que en su trono está</p>\n<h3>Coro</h3>\n<p>Santo, santo, santo</p>\n<p>Dios todo poderoso</p>\n<p>Quien fue, quien es y quien vendrá</p>\n<p>La creación te canta</p>\n<p>Hosanna al gran Yo soy</p>\n<p>Tú eres mi todo</p>\n<p>Y yo te adoraré</p>\n<p>\n    <br>\n</p>\n<p>De un arco iris, está vestido</p>\n<p>Su voz resuena, como los truenos</p>\n<p>Recibe honor y gloria</p>\n<p>Poder y majestad</p>\n<p>A ti, el único Rey</p>\n<p>\n    <br>\n</p>\n<p>Tan grandioso, asombroso</p>\n<p>Con solo decir Jesús</p>\n<p>Cristo tu nombre es grande</p>\n<p>Fuerte inagotable</p>\n<p>Tu misterio glorioso es</p>"
  },
  {
    id: 22,
    title: "Bendito sea tu nombre",
    lyrics: "<p>Toda la creaci&oacute;n te bendice oh, santo Dios</p><p>T&uacute; nos llenas de tu amor y de tu bendici&oacute;n</p><p>En ti conf&iacute;o oh, Dios cuando estoy en tribulaci&oacute;n</p><p>Aunque en sombra de muerte este en ti confiar&eacute;.</p><p>&nbsp;</p><p>Siempre oh, Dios bendito seas, gloria sea a Ti</p><p>T&uacute; transformas mi tristeza y hoy puedo decir</p><p>Bendito sea tu nombre oh Se&ntilde;or, bendito seas t&uacute;</p><p>Bendito sea tu nombre oh Se&ntilde;or,</p><p>Bendito seas t&uacute; glorioso Dios.</p><p>&nbsp;</p><p>Oh mi santo Dios t&uacute; nos llenas de paz y amor</p><p>Que el mundo pueda decir: Gloria sea a Ti</p><p>Oh mi Salvador t&uacute; me gu&iacute;as con tu amor</p><p>En dolor o en aflicci&oacute;n hoy me entrego a Ti.</p><p>&nbsp;</p><p>Siempre oh, Dios bendito seas, gloria sea a Ti</p><p>T&uacute; transformas mi tristeza y hoy puedo decir</p><p>Bendito sea tu nombre oh, Se&ntilde;or, bendito sea seas T&uacute;</p><p>Bendito sea tu nombre oh, Se&ntilde;or,</p><p>Bendito seas tu glorioso Dios.</p><p>&nbsp;</p><p>Me das tu bendici&oacute;n y quitas mi aflicci&oacute;n</p><p>Mi coraz&oacute;n a ti no se cansa en bendecir</p><p>Me das tu bendici&oacute;n y quitas mi aflicci&oacute;n</p><p>Mi coraz&oacute;n a ti no se cansa en bendecir</p><p>&nbsp;</p><p>Bendito sea tu nombre oh, Se&ntilde;or, bendito sea seas T&uacute;</p><p>Bendito sea tu nombre oh, Se&ntilde;or,</p><p>Bendito seas T&uacute; glorioso Dios. </p>"
  },
  {
    id:23,
    title: "No me soltarás",
    lyrics: "<p>Aunque yo este en el valle de la muerte y dolor,<br />tu amor me quita todo temor.<br />Y si llego a estar en el centro de la tempestad,<br />no dudar&eacute; porque estas aqu&iacute;.</p><p>Y no temer&eacute; del mal<br />Pues mi Dios conmigo esta<br />Y si Dios conmigo esta<br />&iquest;De quien temer&eacute;?<br />&iquest;De quien temer&eacute;?</p><p>No, no, no me soltar&aacute;s<br />en la calma o la tormenta.<br />No, no, no me soltar&aacute;s<br />en lo alto en lo bajo.<br />No, no, no me soltar&aacute;s<br />Dios tu nunca me dejar&aacute;s!</p><p>Puedo ver la luz que se acerca<br />Al que busca de ti<br />Gloriosa luz cual otra no hay<br />Y terminar&aacute;n los problemas<br />Y mientras llega el fin<br />Viviremos conociendote a ti</p><p>Y no temere del mal<br />Pues mi Dios conmigo esta<br />Y si Dios conmigo esta<br />&iquest;De quien temer&eacute;?<br />&iquest;De quien temer&eacute;?</p><p>No, no, no me soltar&aacute;s<br />en la calma o la tormenta.<br />No, no, no me soltar&aacute;s<br />en lo alto en lo bajo.<br />No, no, no me soltar&aacute;s<br />Dios tu nunca me dejar&aacute;s!</p><p>Y puedo ver la luz que se acerca<br />Al que busca de ti<br />Y terminaran los problemas<br />Y mientras llega el fin<br />Voy a alabarte<br />Voy a alabarte</p>"
  },
  {
    id: 24,
    title: "Cordero y León",
    lyrics: "<p>VERSO 1:<br />&Eacute;l viene con poder<br />Todo reino lo ver&aacute;<br />Cadenas romper&aacute;<br />Y todos le adorar&aacute;n<br />&iexcl;Qui&eacute;n como el Se&ntilde;or Dios fuerte!</p> <p>CORO:<br />&Eacute;l es el Le&oacute;n, Le&oacute;n de Jud&aacute;<br />&Eacute;l tiene poder para liberar<br />Todos se postrar&aacute;n ante ti<br />&Eacute;l es el Cordero, Cordero inmolado<br />Su sangre en la cruz borr&oacute; mi pecado<br />Todos se postrar&aacute;n<br />Ante el Cordero y el Le&oacute;n<br />Todos se postrar&aacute;n ante ti</p> <p>VERSO 2:<br />Abrid las puertas hoy<br />Al Rey de reyes y Se&ntilde;or<br />El Dios de Salvaci&oacute;n<br />Vino a darnos libertad<br />&iexcl;Qui&eacute;n como el Se&ntilde;or Dios fuerte!</p> <p>PUENTE:<br />&iexcl;Qui&eacute;n como el Se&ntilde;or Dios fuerte!<br />&iexcl;Qui&eacute;n como el Se&ntilde;or Dios fuerte!</p> <p>TAG:<br />&iexcl;Qui&eacute;n como el Se&ntilde;or Dios fuerte!<br />&iexcl;Qui&eacute;n como el Se&ntilde;or!</p>"
  },
  {
    id: 25,
    title: "Poderoso para salvar",
    lyrics: "<p>Todos necesitan amor que nunca falla<br />Tu gracia y compasi&oacute;n<br />Todos necesitan perd&oacute;n y esperanza<br />Y un Dios que salva</p> <p>CORO:<br />Cristo puede mover montes<br />&iexcl;S&oacute;lo Dios puede salvar, mi Dios puede salvar!<br />Por siempre, autor de salvaci&oacute;n<br />Jes&uacute;s la muerte venci&oacute;, el la muerte venci&oacute;</p> <p>Aun con mis temores s&eacute; que me aceptas<br />Ll&eacute;name otra vez<br />Mi vida te ofrezco para seguir tus pasos<br />A T&iacute; me rindo( a ti me rindo)</p> <p>CORO:<br />Cristo puede mover montes<br />&iexcl;S&oacute;lo Dios puede salvar, mi Dios puede salvar!<br />Por siempre, autor de salvaci&oacute;n<br />Jes&uacute;s la muerte venci&oacute;, el la muerte venci&oacute;</p> <p>PUENTE: <br />En la tierra, Tu luz brillar&aacute;<br />Cantamos por la gloria de Tu majestad, Jes&uacute;s</p> <p>CORO:<br />Cristo puede mover montes<br />&iexcl;S&oacute;lo Dios puede salvar, mi Dios puede salvar!<br />Por siempre, autor de salvaci&oacute;n<br />Jes&uacute;s la muerte venci&oacute;, el la muerte venci&oacute;</p>"
  },
  {
    id: 26,
    title: "Perfume a tus pies",
    lyrics: "<p>Cuando pienso en Tu amor y en Tu fidelidad<br />No puedo hacer m&aacute;s que postrarme y adorar<br />Y cuando pienso en c&oacute;mo he sido<br />Y hasta d&oacute;nde me has tra&iacute;do<br />Me asombro de Ti</p> <p>Y no me quiero conformar<br />He probado y quiero m&aacute;s<br />Yo quiero enamorarme m&aacute;s de Ti<br />Ens&eacute;&ntilde;ame a amarte y a vivir<br />Conforme a Tu justicia y Tu verdad</p> <p>Con mi vida quiero adorar<br />Con todo lo que tengo y lo que soy<br />Todo lo que he sido te lo doy<br />Que mi vida sea para Ti como un perfume a tus pies</p> <p>Cuando pienso en Tu cruz y en todo lo que has dado<br />Tu sangre por mi, por llevar mi pecado<br />Y cuando pienso en Tu mano, hasta aqu&iacute; hemos llegado<br />Por Tu fidelidad</p> <p>Y no me quiero conformar<br />He probado y quiero m&aacute;s<br />(No me quiero conformar)<br />Y no me quiero conformar<br />He probado y quiero m&aacute;s<br />Yo quiero enamorarme m&aacute;s de Ti</p> <p>Ens&eacute;&ntilde;ame amarte y a vivir<br />Conforme a Tu justicia y Tu verdad<br />Con mi vida quiero adorar<br />Con todo lo que tengo y lo que soy<br />Todo lo que he sido te lo doy<br />Que mi vida sea para Ti como un perfume a tus pies</p> <p>Cuando pienso en tu cruz y en todo lo que has dado<br />Tu sangre por m&iacute;, por llevar mi pecado<br />Y cuando pienso en tu mano, hasta aqu&iacute; hemos llegado<br />Por Tu fidelidad</p> <p>No me quiero conformar<br />He probado y quiero m&aacute;s<br />Yo quiero enamorarme m&aacute;s de Ti<br />Ens&eacute;&ntilde;ame amarte y a vivir<br />Conforme a Tu justicia y Tu verdad<br />Con mi vida quiero adorar<br />Con todo lo que tengo y lo que soy<br />Todo lo que he sido te lo doy<br />Que mi vida sea para Ti como un perfume a tus pies</p>"
  },
  {
    id: 27,
    title: "Roca eterna",
    lyrics: "<p>Gracias, se&ntilde;or, gracias, se&ntilde;or<br />Por tu obra en m&iacute;<br />Gracias se&ntilde;or, por tu amor<br />Por entregarte y darme tu perd&oacute;n</p> <p>Postrado ante tu altar<br />Te quiero adorar<br />Rendir mi coraz&oacute;n<br />Llen&aacute;ndome de ti</p> <p>Eres el agua viva<br />Puedes saciar mi sed<br />Eres la roca eterna<br />De la cual nunca caer&eacute;</p> <p>Eres mi fortaleza<br />No puedo vivir sin ti<br />T&uacute; significas todo<br />Lo eres todo para m&iacute;</p>"
  },
  {
    id: 28,
    title: "Necesito al Señor",
    lyrics: "<p>Necesito al Se&ntilde;or en mi Diario vivir<br />Necesito Pensar que el esta junto a mi</p> <p><br />Necesito al Se&ntilde;or y su grande amor<br />Necesito confiar que el me ayudara<br /><br />Necesito al Se&ntilde;or siempre al despertar<br />Necesito yo hacer de el mi seguridad</p> <p><br />Necesito al Se&ntilde;or y su grande amor<br />Necesito confiar que el me ayudara<br /><br />Necesito al Se&ntilde;or y creer que el esta<br />a mi lado para ayudarme cuando<br />disminuya mi fe su voz oire<br />y me hara comprender lo que debo mirar<br />es tan grande su amor que no debo dudar<br />aunque sienta pesar tristesa o dolor</p> <p>al final triunfare pues cerca de mi<br />esta el Se&ntilde;or es mi salvador<br />necesito de El es mi salvador<br /><br />Necesito al Se&ntilde;or y creer que el esta<br />a mi lado para ayudarme cuando<br />disminuya mi fe su voz oire<br />y me hara comprender lo que debo mirar<br />es tan grande su amor que no debo dudar<br />aunque sienta pesar tristesa o dolor</p> <p>al final triunfare pues cerca de mi<br />esta el Se&ntilde;or es mi salvador<br />necesito de El es mi salvador</p>"
  },
  {
    id: 29,
    title: "Amor sin condición",
    lyrics: "<p>A&uacute;n antes de hablar, tu voz pod&iacute;a o&iacute;r<br />Has sido tan bueno para m&iacute;<br />Antes de respirar, soplaste tu aliento en m&iacute;<br />Has sido tan bueno para m&iacute;</p> <p>Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n<br />Me persigue y deja las noventa y nueve<br />Y va por m&iacute;</p> <p>No puedo ganarlo, ni merecerlo<br />Tu amor se entreg&oacute; por m&iacute;<br />Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n</p> <p>Cuando enemigo fui<br />Tu amor luch&oacute; por m&iacute;<br />Has sido tan bueno para m&iacute;<br />Cuando indigno fui<br />Pagaste el precio por m&iacute;<br />Has sido tan bueno para m&iacute;</p> <p>Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n<br />Me persigue y deja las noventa y nueve<br />Y va por m&iacute;</p> <p>No puedo ganarlo, ni merecerlo<br />Tu amor se entreg&oacute; por m&iacute;<br />Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n, &iexcl;yeah!</p> <p>No hay sombra que no alumbres<br />Monte que no escales<br />Para encontrarme a m&iacute;<br />No hay pared que no derrumbes<br />Cadena que no rompas<br />Para encontrarme a m&iacute;</p> <p>No hay sombra que no alumbres<br />Monte que no escales<br />Para encontrarme a m&iacute;<br />No hay pared que no derrumbes<br />Cadena que no rompas<br />Para encontrarme a m&iacute;</p> <p>Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n<br />Me persigue y deja las noventa y nueve<br />Y va por m&iacute;</p> <p>No puedo ganarlo, ni merecerlo<br />Tu amor se entreg&oacute; por m&iacute;<br />Tu amor me envuelve, me sostiene<br />Amor sin condici&oacute;n</p>"
  },
  {
    id: 30,
    title: "Diez mil razones",
    lyrics: "<p>Que todo lo que soy, alabe al se&ntilde;or<br />Con todo mi coraz&oacute;n<br />De tu grande amor, cantar&eacute;<br />Tu nombre alabar&eacute;</p> <p>Sale el Sol<br />Es un nuevo amanecer<br />Cantar&eacute; a ti otra vez<br />Sea lo que venga, confiar&eacute; en ti<br />Alabar&eacute; en el anochecer</p> <p>Que todo lo que soy, alabe al se&ntilde;or<br />Con todo mi coraz&oacute;n<br />De tu grande amor, cantar&eacute;<br />Tu nombre alabar&eacute;</p> <p>Tu amor no tiene fin<br />Y t&uacute; eres para siempre<br />Y bondadoso es tu coraz&oacute;n<br />Por todo lo que has hecho yo sigo cantando<br />Diez mil razones para alabar</p> <p>Que todo lo que soy, alabe al se&ntilde;or<br />Con todo mi coraz&oacute;n<br />De tu grande amor, cantar&eacute;<br />Tu nombre alabar&eacute;</p> <p>Y en ese d&iacute;a cuando ya no tenga fuerza<br />Y se acerque tu gloria<br />Mi alma cantar&aacute; de tu amor sin final<br />Diez mil a&ntilde;os y para siempre m&aacute;s</p> <p>Bless the lord<br />Oh my soul<br />Oh my soul<br />Worship his holy name<br />Sing like never before<br />Oh my soul<br />Worship his holy name</p>"
  },
  {
    id: 31,
    title: "Tu amor no se rinde",
    lyrics: "<p>Un nuevo inicio nos ofreces<br />Los corazones a ti vuelven<br />Tu redenci&oacute;n es persistente<br />Constante amor<br />Constante amor</p> <p>Me llevar&aacute;s, llevar&aacute;s<br />En tus brazos Dios<br />Me cubrir&aacute;s, cubrir&aacute;s<br />Con tu eterno amor</p> <p>Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde</p> <p>La oscuridad hemos dejado<br />Y por tu luz somos guiados<br />Tu esperanza encontramos<br />Constante amor<br />Constante amor</p> <p>Me llevar&aacute;s, llevar&aacute;s<br />En tus brazos Dios<br />Me cubrir&aacute;s, cubrir&aacute;s<br />Con tu eterno amor</p> <p>Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde</p> <p>Has abierto nuestros ojos<br />Caminamos en tu libertad<br />Sin cesar t&uacute; luchar&aacute;s<br />Para salvar la humanidad</p> <p>Has abierto nuestros ojos<br />Caminamos en tu libertad<br />Sin cesar t&uacute; luchar&aacute;s<br />Para salvar</p> <p>Me llevar&aacute;s, llevar&aacute;s<br />En tus brazos Dios<br />Me cubrir&aacute;s, cubrir&aacute;s<br />Con tu eterno amor</p> <p>Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde<br />Tu amor no se rinde</p>"
  },
  {
    id: 32,
    title: "Príncipe de Paz",
    lyrics: "<p>T&uacute; eres santo, (T&uacute; eres santo)<br />Poderoso, (poderoso)<br />t&uacute; eres digno, (t&uacute; eres digno)<br />de adoraci&oacute;n. (de adoraci&oacute;n)</p> <p>Quiero seguirte, (Quiero seguirte)<br />quiero escucharte, (quiero escucharte)<br />quiero amarte, (quiero amarte)<br />por siempre oh Dios. (por siempre oh Dios)</p> <p>Hoy yo canto, (T&uacute; eres mi Se&ntilde;or)<br />y te alabo, (Rey y Salvador)<br />porque t&uacute; eres, (majestuoso Dios)<br />mi Dios santo. (Rey de eternidad)</p> <p>Yo te amo, (Eres Emanuel)<br />y te adoro, (mi amigo fiel)<br />porque cuidas, (mi Se&ntilde;or y Dios)<br />de nosotros. (t&uacute; eres Rey de paz)</p> <p>Hoy yo canto, (Nuestro Redentor)<br />y te alabo, (Rey y Salvador)<br />Dios grandioso, (Rey de eternidad)<br />y mi Salvador. (vivir&aacute;s por siempre)</p> <p>Yo te amo, (El comienzo y fin)<br />y te adoro, (nuestro creador)<br />yo me entrego, (poderoso Dios)<br />en tus brazos. (Rey de eternidad)</p> <p>T&uacute; eres Rey de Paz y cantar&eacute; de tu amor.</p>"
  },
  {
    id: 33,
    title: "Cuando grande es Dios",
    lyrics: "<p>El Rey en su esplendor, vestido en majestad</p> <p>&iexcl;D&eacute;mosle loor! &iexcl;D&eacute;mosle loor!</p> <p>Rodeado con su luz, la oscuridad se va.</p> <p>&iexcl;Tiembla a su voz! &iexcl;Tiembla a su voz!</p> <p>&nbsp;</p> <p><strong>CORO:</strong></p> <p>&iexcl;Cu&aacute;n grande es Dios! &iexcl;Canta, s&iacute;! &iexcl;Cu&aacute;n grande es Dios!</p> <p>Que todos vean hoy, &iexcl;Cu&aacute;n grande es Dios!</p> <p>&nbsp;</p> <p>El mismo ser&aacute; por la eternidad.</p> <p>&iexcl;Principio y Final! &iexcl;Principio y Final!</p> <p>La Santa Trinidad: Padre, Esp&iacute;ritu.</p> <p>Le&oacute;n de Jud&aacute;, Cordero de Dios.</p> <p>&nbsp;</p> <p><strong>CORO:</strong></p> <p>&iexcl;Cu&aacute;n grande es Dios! &iexcl;Canta, s&iacute;! &iexcl;Cu&aacute;n grande es Dios!</p> <p>Que todos vean hoy, &iexcl;Cu&aacute;n grande es Dios!</p> <p>&nbsp;</p> <p>&iexcl;Cu&aacute;n grande es Dios! &iexcl;Canta, s&iacute;! (<em>Nombre sin igual</em>)</p> <p>&iexcl;Cu&aacute;n grande es Dios! (<em>eres digno de loor</em>)</p> <p>Que todos vean hoy, (<em>Hoy cantar&eacute;</em>)</p> <p>&iexcl;Cu&aacute;n grande es Dios! (<em>&iexcl;Cu&aacute;n Grande es Dios!</em>)</p> <p>&nbsp;</p> <p>&iexcl;Cu&aacute;n grande es Dios! &iexcl;Canta, s&iacute;! (<em>Nombre sin igual</em>)</p> <p>&iexcl;Cu&aacute;n grande es Dios! (<em>eres digno de loor</em>)</p> <p>Que todos vean hoy, (<em>Hoy cantar&eacute;</em>)</p> <p>&iexcl;Cu&aacute;n grande es Dios! (<em>&iexcl;Cu&aacute;n Grande es Dios!</em>)</p> <p>&nbsp;</p> <p>Te amo y proclamo por tu gran poder</p> <p>&iexcl;Cu&aacute;n grande eres, oh Jehov&aacute;!</p> <p>Te exalto a Ti con toda mi alma y ser.</p> <p>&iexcl;Grande eres T&uacute;! &iexcl;Grande eres T&uacute;!</p>"
  },
  {
    id: 34,
    title: "Con Cristo, con Cristo",
    lyrics: "<p>Con Cristo, con Cristo, junto a las flores,</p> <p>he encontrado que mi vida es de colores.</p> <p>El sol y la luna, caminan conmigo,</p> <p>desde cuando Jesucristo est&aacute; conmigo.</p> <p>&nbsp;</p> <p>Coro</p> <p>Voy corriendo por los valles,</p> <p>voy saltando en los trigales,</p> <p>siempre unidos de la mano,</p> <p>voy cantando esta canci&oacute;n.</p> <p>Voy corriendo por los valles,</p> <p>voy saltando en los trigales,</p> <p>siempre unidos de la mano,</p> <p>Cristo y yo.</p> <p>&nbsp;</p> <p>Con Cristo, con Cristo, junto a las flores,</p> <p>he encontrado que mi vida es de colores.</p> <p>El sol y la luna, caminan conmigo,</p> <p>desde cuando Jesucristo est&aacute; conmigo.</p> <p>&nbsp;</p> <p>Coro</p> <p>Voy corriendo por los valles,</p> <p>voy saltando en los trigales,</p> <p>siempre unidos de la mano,</p> <p>voy cantando esta canci&oacute;n.</p> <p>Voy corriendo por los valles,</p> <p>voy saltando en los trigales,</p> <p>siempre unidos de la mano,</p> <p>Cristo y yo,</p> <p>Cristo y yo,</p> <p>Cristo y yo.</p>"
  },
  {
    id: 35,
    title: "Dios ha sido tan bueno conmigo",
    lyrics: "<p>Dios ha sido tan bueno conmigo,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre;</p> <p>Dios ha sido tan bueno conmigo,</p> <p>quiero alabar su nombre.</p> <p>Alelu, aleluya.</p> <p>&nbsp;</p> <p>Dios ha sido tan bueno conmigo,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre;</p> <p>Dios ha sido tan bueno conmigo,</p> <p>quiero alabar su nombre.</p> <p>Alelu, aleluya.</p> <p>&nbsp;</p> <p>En las pruebas &Eacute;l est&aacute; conmigo,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre,</p> <p>quiero alabar su nombre;</p> <p>En las pruebas &Eacute;l est&aacute;conmigo,</p> <p>quiero alabar su nombre.</p> <p>Alelu, aleluya.</p>"
  },
  {
    id: 36,
    title: "La alegría / Id con Cristo",
    lyrics: "<p>La alegría está en el corazón</p>\n<p>De quien ya conoce a Jesús</p>\n<p>La verdadera paz está en aquel</p>\n<p>Que ya conoce a Jesús.</p>\n<h3>Coro</h3>\n<p>El sentimiento más precioso</p>\n<p>Que viene de nuestro Señor</p>\n<p>Es el amor que solo tiene</p>\n<p>Quien conoce a Jesús</p>\n<p>¡Aleluya! ¡Amén!</p>\n<p><br></p>\n<p>Puedes cruzar los montes</p>\n<p>Y escalar las montañas</p>\n<p>¡Aleluya! ¡Aleluya!</p>\n<p>Puedes cruzar los montes</p>\n<p>Y escalar las montañas</p>\n<p>¡Aleluya! ¡Aleluya!</p><p>Id con Cristo caminando sobre el agua</p>\n<p>Tú lo podrás si te dejas llevar.</p>\n<p>Puedes ir con Cristo la tormenta puede Él calmar</p>\n<p>Id con cristo te salvará</p>\n<p>\n    <br>\n</p>\n<p>Si te sientes desdichado</p>\n<p>Con profundo vacío</p>\n<p>Solo en Cristo hallarás</p>\n<p>El Camino de Vida</p>\n<p>Acéptale hoy en tu corazón</p>\n<p>Y verás entonces tu vida cambiar.</p>"
  },
  {
    id: 37,
    title: "En Cristo hallo Amigo",
    lyrics: "<p>En Cristo hallo amigo y amante Salvador;</p> <p>contar&eacute;, pues, cuanto ha hecho &eacute;l por m&iacute;.</p> <p>Hall&aacute;ndome perdido e indigno pecador,</p> <p>rescatome y hoy me guarda para s&iacute;.</p> <p>Me salva del pecado, me guarda de Sat&aacute;n,</p> <p>promete estar conmigo siempre aqu&iacute;;</p> <p>consuela mi tristeza, me quita todo af&aacute;n;</p> <p>grandes cosas Cristo ha hecho ya por m&iacute;.</p> <p>&nbsp;</p> <p>Jes&uacute;s jam&aacute;s me falta, jam&aacute;s me dejar&aacute;;</p> <p>es mi fuerte y poderoso protector.</p> <p>Del mundo hoy me aparto, de toda vanidad,</p> <p>para consagrar la vida a mi Se&ntilde;or.</p> <p>Si el mundo me persigue, si sufro tentaci&oacute;n,</p> <p>confiando en &eacute;l podr&eacute; vencer aqu&iacute;;</p> <p>segura es la victoria, y elevo mi canci&oacute;n:</p> <p>grandes cosas Cristo ha hecho ya por m&iacute;.</p> <p>&nbsp;</p> <p>Bien s&eacute; que Cristo en gloria muy pronto volver&aacute;,</p> <p>y entretanto me prepara un bello hogar.</p> <p>En la casa de mi Padre, mansi&oacute;n de luz y paz,</p> <p>el creyente fiel con &eacute;l ha de morar.</p> <p>Y entrado en su gloria, pesar no sentir&eacute;,</p> <p>pues contemplar&eacute; su rostro siempre all&iacute;;</p> <p>con los santos redimidos gozoso cantar&eacute;:</p> <p>grandes cosas Cristo ha hecho ya por m&iacute;.</p>"
  },
  {
    id: 38,
    title: "Canción del Espíritu",
    lyrics: "<p>Oh, deja que el Se&ntilde;or te envuelva</p> <p>con su Esp&iacute;ritu de amor;</p> <p>satisfaga hoy tu alma y coraz&oacute;n.</p> <p>Entr&eacute;gale lo que &eacute;l te indique,</p> <p>y su Esp&iacute;ritu vendr&aacute;</p> <p>sobre ti y vida nueva te dar&aacute;.</p> <p>&nbsp;</p> <p><strong>Coro</strong></p> <p>Cristo, &iexcl;oh, Cristo!</p> <p>Ven y ll&eacute;nanos.</p> <p>Cristo, &iexcl;oh, Cristo!</p> <p>Ll&eacute;nanos de ti.</p> <p><br />Alzamos nuestra voz con gozo,</p> <p>nuestra alabanza a ti;</p> <p>con dulzura te entregamos nuestro ser.</p> <p>Entrega toda tu tristeza</p> <p>en el nombre de Jes&uacute;s,</p> <p>y abundante vida hoy tendr&aacute;s en &eacute;l.</p>"
  }
]

export default hymns;
