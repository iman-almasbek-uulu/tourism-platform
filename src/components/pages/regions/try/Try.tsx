"use client"
import UseTranslate from "@/ui/Translate";
import scss from "./Try.module.scss"
import food1 from "@/images/food.jpg"
import food2 from "@/images/food2.jpg"
import food3 from "@/images/food3.jpg"
import { useState } from "react";
const Try = () => {

    const {t} = UseTranslate()
    let [currentContent, setCurrentContent] = useState<number>(0)
    const tabs  = [
        {
            id:1,
            img: food1,
            content: {
                first: {
                    subtitle: {
                        russian: "Ашлян-фу",
                        arabian: "أشلينفو",
                        english: "Ashlyan-fu"
                      },
                      description: {
                        russian: "Название блюда звучит и пишется по-разному: ашлянфу, ашлямфу, а то и аш-лянфу. Визитная карточка Каракола – ашлям-фу, острый данганский суп, подаваемый холодным. Основные ингредиенты ашлям-фу – два вида лапши: обычная, из пшеничной муки, и крахмальная. Лапша заправляется холодным бульоном, острой лазой и множеством трав.",
                        arabian: "اسم الطبق يكتب ويُنطق بشكل مختلف: أشلينفو، أشلامفو، وحتى أش-ليانفو. سمة مدينة كاراكول هي أشلام-فو، وهو حساء حار دنجاني يُقدّم باردًا. المكونات الرئيسية لأشلام-فو هي نوعان من المعكرونة: العادية، المصنوعة من دقيق القمح، والنشا. تُتبل هذه المعكرونة بالمرق البارد، واللازا الحارة، والكثير من الأعشاب.",
                        english: "The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu. The hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu are two types of noodles: regular, wheat flour, and starch. These noodles are seasoned with cold broth, spicy laza, and lots of herbs."
                      }
                },
                second: {
                    subtitle: {
                        russian: "Что входит в состав блюда",
                        arabian: "ما الذي يحتويه الطبق",
                        english: "What is included in the dish"
                      },
                      description: {
                        russian: "Основные части — это «желе» из крахмала, лапша и горячий соус. В современной кулинарной практике есть более детализированные рецепты ашлямфу. Кто-то утверждает, что он готовится не из мяса и не из овощей. Кто-то придерживается иной точки зрения. Чаще всего ашлян-фу подают с жареными картофельными пирожками и горячим чаем.",
                        arabian: "الأجزاء الرئيسية هي «الهلام» المصنوع من النشا، والمعكرونة، والصلصة الحارة. في الممارسة الطهو الحديثة، توجد العديد من الوصفات التفصيلية لأشلامفو. يزعم البعض أنه لا يُعد من اللحوم ولا من الخضار. البعض الآخر يتبنى وجهة نظر مغايرة. وغالبًا ما يُقدّم أشلينفو مع فطائر البطاطا المقلية والشاي الساخن.",
                        english: "The main parts are 'jelly' made from starch, noodles, and hot sauce. In modern culinary practice, there are many more detailed recipes for ashlyanfu. Someone claims that it is prepared not from meat and not from vegetables. Some take an alternative view. Most often, ashlan-fu is served with fried potato pies and hot tea."
                      }
              
                }
            }
        },
        {
            id:2,
            img: food2,
            content: {
                first: {
                    subtitle: {
                        russian: "Ашлян-фу",
                        arabian: "أشلينفو",
                        english: "Ashlyan-fu"
                      },
                      description: {
                        russian: "Название блюда звучит и пишется по-разному: ашлянфу, ашлямфу, а то и аш-лянфу. Визитная карточка Каракола – ашлям-фу, острый данганский суп, подаваемый холодным. Основные ингредиенты ашлям-фу – два вида лапши: обычная, из пшеничной муки, и крахмальная. Лапша заправляется холодным бульоном, острой лазой и множеством трав.",
                        arabian: "اسم الطبق يكتب ويُنطق بشكل مختلف: أشلينفو، أشلامفو، وحتى أش-ليانفو. سمة مدينة كاراكول هي أشلام-فو، وهو حساء حار دنجاني يُقدّم باردًا. المكونات الرئيسية لأشلام-فو هي نوعان من المعكرونة: العادية، المصنوعة من دقيق القمح، والنشا. تُتبل هذه المعكرونة بالمرق البارد، واللازا الحارة، والكثير من الأعشاب.",
                        english: "The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu. The hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu are two types of noodles: regular, wheat flour, and starch. These noodles are seasoned with cold broth, spicy laza, and lots of herbs."
                      }
                },
                second: {
                    subtitle: {
                        russian: "Что входит в состав блюда",
                        arabian: "ما الذي يحتويه الطبق",
                        english: "What is included in the dish"
                      },
                      description: {
                        russian: "Основные части — это «желе» из крахмала, лапша и горячий соус. В современной кулинарной практике есть более детализированные рецепты ашлямфу. Кто-то утверждает, что он готовится не из мяса и не из овощей. Кто-то придерживается иной точки зрения. Чаще всего ашлян-фу подают с жареными картофельными пирожками и горячим чаем.",
                        arabian: "الأجزاء الرئيسية هي «الهلام» المصنوع من النشا، والمعكرونة، والصلصة الحارة. في الممارسة الطهو الحديثة، توجد العديد من الوصفات التفصيلية لأشلامفو. يزعم البعض أنه لا يُعد من اللحوم ولا من الخضار. البعض الآخر يتبنى وجهة نظر مغايرة. وغالبًا ما يُقدّم أشلينفو مع فطائر البطاطا المقلية والشاي الساخن.",
                        english: "The main parts are 'jelly' made from starch, noodles, and hot sauce. In modern culinary practice, there are many more detailed recipes for ashlyanfu. Someone claims that it is prepared not from meat and not from vegetables. Some take an alternative view. Most often, ashlan-fu is served with fried potato pies and hot tea."
                      }
              
                }
            }
        },
        {
            id:3,
            img: food3,
            content: {
                first: {
                    subtitle: {
                        russian: "Ашлян-фу",
                        arabian: "أشلينفو",
                        english: "Ashlyan-fu"
                      },
                      description: {
                        russian: "Название блюда звучит и пишется по-разному: ашлянфу, ашлямфу, а то и аш-лянфу. Визитная карточка Каракола – ашлям-фу, острый данганский суп, подаваемый холодным. Основные ингредиенты ашлям-фу – два вида лапши: обычная, из пшеничной муки, и крахмальная. Лапша заправляется холодным бульоном, острой лазой и множеством трав.",
                        arabian: "اسم الطبق يكتب ويُنطق بشكل مختلف: أشلينفو، أشلامفو، وحتى أش-ليانفو. سمة مدينة كاراكول هي أشلام-فو، وهو حساء حار دنجاني يُقدّم باردًا. المكونات الرئيسية لأشلام-فو هي نوعان من المعكرونة: العادية، المصنوعة من دقيق القمح، والنشا. تُتبل هذه المعكرونة بالمرق البارد، واللازا الحارة، والكثير من الأعشاب.",
                        english: "The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu. The hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu are two types of noodles: regular, wheat flour, and starch. These noodles are seasoned with cold broth, spicy laza, and lots of herbs."
                      }
                },
                second: {
                    subtitle: {
                        russian: "Что входит в состав блюда",
                        arabian: "ما الذي يحتويه الطبق",
                        english: "What is included in the dish"
                      },
                      description: {
                        russian: "Основные части — это «желе» из крахмала, лапша и горячий соус. В современной кулинарной практике есть более детализированные рецепты ашлямфу. Кто-то утверждает, что он готовится не из мяса и не из овощей. Кто-то придерживается иной точки зрения. Чаще всего ашлян-фу подают с жареными картофельными пирожками и горячим чаем.",
                        arabian: "الأجزاء الرئيسية هي «الهلام» المصنوع من النشا، والمعكرونة، والصلصة الحارة. في الممارسة الطهو الحديثة، توجد العديد من الوصفات التفصيلية لأشلامفو. يزعم البعض أنه لا يُعد من اللحوم ولا من الخضار. البعض الآخر يتبنى وجهة نظر مغايرة. وغالبًا ما يُقدّم أشلينفو مع فطائر البطاطا المقلية والشاي الساخن.",
                        english: "The main parts are 'jelly' made from starch, noodles, and hot sauce. In modern culinary practice, there are many more detailed recipes for ashlyanfu. Someone claims that it is prepared not from meat and not from vegetables. Some take an alternative view. Most often, ashlan-fu is served with fried potato pies and hot tea."
                      }
              
                }
            }
        }
    ]

    return (
        <section id={scss.Try}>
            <div className="container">
                <h2>{t("","","What to try in Issyk-Kul?")}</h2>
                <div key={tabs[currentContent].id} className={scss.content}>
                        <div className={scss.item}>
                            <h4>{t(
                                tabs[currentContent].content.first.subtitle.russian,
                                tabs[currentContent].content.first.subtitle.arabian,
                                tabs[currentContent].content.first.subtitle.english)}</h4>
                            <p>{t(
                                tabs[currentContent].content.first.description.russian,
                                tabs[currentContent].content.first.description.arabian,
                                tabs[currentContent].content.first.description.english,
                            )}</p>
                        </div>
                        <div className={scss.imgs}>
                                <img src={tabs[currentContent].img.src} alt="" />
                            <div>
                                <div className={scss.bg}>
                                    <img src={tabs[currentContent].img.src} alt="" />
                                </div>
                                {tabs.map((el,i) => (
                                    i !== currentContent ?  (
                                        <div key={i} className={scss.bg}>
                                            <div></div>
                                            <img src={el.img.src} alt="" />
                                        </div>
                                    ) : ""
                                ))}
                            </div>
                        </div>
                        <div className={scss.item}>
                            <h4>{t(
                                tabs[currentContent].content.second.subtitle.russian,
                                tabs[currentContent].content.second.subtitle.arabian,
                                tabs[currentContent].content.second.subtitle.english,
                            )}</h4>
                            <p>
                                {t(
                                    tabs[currentContent].content.second.description.russian,
                                    tabs[currentContent].content.second.description.arabian,
                                    tabs[currentContent].content.second.description.english
                                )}    
                            </p>
                        </div>
                </div>
                <div className={scss.tabs}>
                    <button disabled={currentContent === 0} onClick={() => setCurrentContent(--currentContent)}>-</button>
                    <div className={scss.index}>{
                        tabs.map((el,i) => (
                        <button
                            key={i}
                            style={i === currentContent ? { background: "#004A60", borderRadius: "30px", color: "white" } : undefined} 
                            onClick={() => setCurrentContent(i)}
                        >
                            {i + 1}
                        </button>
                        ))    
                    }</div>
                    <button disabled={currentContent === tabs.length - 1} onClick={() => setCurrentContent(++currentContent)}>+</button>
                </div>
            </div>
        </section>

    )
}

export default Try;