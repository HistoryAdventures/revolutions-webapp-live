// dictionary list


const dictionaryList = [
    {
        id: 1,
        title: 'Imperialism',
        description: 'This refers to a policy or an ideology where a nation seeks to extend its authority over other nations. This is typically achieved through military force, but it may also be achieved through other means, such as economic policies. The practice began in antiquity, exemplified by the Persian and Roman Empires for example.'
    },
    {
        id: 2,
        title: 'Indigenous',
        description: 'Indigenous is the term used to define those people who were the original caretakers of a given land. They are the original native inhabitants of a region.'
    },
    {
        id: 3,
        title: 'Industrial Revolution',
        description: 'The industrial revolution refers to the transition from manual to machine-powered methods of manufacturing. This was achieved first in Britain, but soon spread to Europe and the United States. It is typically characterised by the use of steam and waterpower in factories.'
    },
    {
        id: 4,
        title: 'Migration',
        description: 'Migration simply refers to the movement of people from one location to another. The migrants will typically have the intention of settling in this new place permanently. The motivations for migration can be complex and can vary from economic through to compulsion.'
    },
    {
        id: 5,
        title: 'Colonialism',
        description: 'Often used interchangeably with imperialism, colonialism refers to the policy of a nation wishing to extend their authority over territories and peoples. Colonialism is normally used to refer to the unequal relationship between the colonizer and colonised.'
    },
    {
        id: 6,
        title: 'Social Darwinism',
        description: 'Broadly speaking, this refers to the various applications of Charles Darwin’s theories of evolution, natural selection, and especially the concept of the ‘survival of the fittest’ to social and political contexts. Such theories were typically used to assert the legitimacy of one nation’s rule over another.'
    },
    {
        id: 7,
        title: 'Nation State',
        description: 'A nation state refers to a state where the majority of the population takes part in a shared culture and is aware of it as an identifying feature. This culture can be defined in terms of ethnicity, language, or belief for example.'
    }
    ,
    {
        id: 8,
        title: 'Demographics',
        description: 'This refers to the study of the size, make-up and distribution of people, and the various changes to these metrics that can arise. Demographics can be used to explore whole populations, or it can be refined to focus on particular societal groups only.'
    }
    ,
    {
        id: 9,
        title: 'Gunboat Diplomacy',
        description: 'The pursuit of foreign policy objectives – typically those associated with imperialism – through the display of overt naval power. The threat of direct military intervention often cowed less-technologically developed states into complying with the wishes of the aggressors.'
    }
    ,
    {
        id: 10,
        title: 'Capitalism',
        description: 'This is an economic system which is based on the private ownership of the means of production and their operation for profit. Capitalist economics were essential to the processes of industrialisation and expansion during this period.'
    }
    ,
    {
        id: 11,
        title: 'Urbanization',
        description: 'This term refers to the increasing settlement of people within cities after they had moved away from rural locations. This was typically motivated by economic pressures, such as the rise of industrialisation, although this may not always be the sole factor.'
    }
    ,
    {
        id: 12,
        title: 'Revolution',
        description: 'A revolution is a fundamental and sudden change in the sources and organisation of political power, typically with one constitution replacing another. The motivations for this change can be varied. Revolutions also vary from case to case; not all are violent.'
    },
    {
        id: 13,
        title: 'Orientalism',
        description: 'A historiographical concept developed in 1978 by Edward Said. It refers to an imagined, often patronising, representation of “eastern” societies (referring to Asian and African nations) evident in the politics and societies of western, imperialist states.'
    },
    {
        id: 14,
        title: 'Sovereignty',
        description: 'Sovereignty refers to the full right and power of a given governing body over itself, without any interference from external bodies. Broadly speaking, it refers to a state’s supreme authority and it can have different sources.'
    }
    ,
    {
        id: 15,
        title: 'Liberalism',
        description: 'A political doctrine that emerged from during this period. Its central doctrine is that the main goal of politics should be the protection and the enhancement of the freedom of the individual in society. In Liberalism, government occupies an ambivalent role; it is both necessary to protect the individual and a source of danger to the individual. According to Thomas Paine’s Common Sense (1776), government could only ever be, at best, “a necessary evil”.'
    }
    ,
    {
        id: 16,
        title: 'Nationalism',
        description: 'This is the ideology that champions the interests of a particular nation. It is characterised by the aim of establishing and perpetuating the nation’s sovereignty over it’s own territory. As part of this, Nationalism champions the pursuit of a single national identity for its population.'
    }
    ,
    {
        id: 17,
        title: 'Independence',
        description: 'The state of a nation in which the residents / population (or some portion of them) are able to exercise some form of self-government over the territory of the nation. This self-government usually encompasses a level of sovereignty.'
    }
    ,
    {
        id: 18,
        title: 'Absolutism',
        description: 'An absolute monarch is a head of state that holds supreme autocratic power (absolutism). An absolute monarch is not restricted by the laws or customs of a given state.'
    }
    ,
    {
        id: 19,
        title: 'Separation of Powers',
        description: 'A model of state governance where in the branches of government are divided into separate and independent bodies of responsibility and interest. This avoids the manifestation of total power in the hands of any one branch of government. The typical division is into three branches: the legislature, the executive, and the judiciary. This tripartite system is usually ascribed to French philosopher Montesquieu, one of the key thinkers of the Enlightenment Period.'
    }
    ,
    {
        id: 20,
        title: 'Enlightenment',
        description: 'An intellectual and philosophical movement in 18th century Europe. Developments in intellectual and philosophical ideas were closely associated with the scientific revolution. The beliefs of the Enlightenment influenced not only the thinkers of the Revolutions in America and France, but also various European Monarchs, famously Catherine the Great and Frederick of Prussia, showing how pervasive they were (these monarchs are typically characterised as ruling through Enlightened Absolutism).'
    }
];


function initDictionaryList() {
    const stickyNotes = document.querySelector('#stickyNotes');
    let stickyNoteItem = '';

    (dictionaryList || []).forEach(item => {
        let heshTag=item.title.replace(' ','<br/>');
        stickyNoteItem = stickyNoteItem + `<div class="dropdown  sticky-note-block position-relative">
                            <button class="btn border bg-white dropdown-toggle rounded-0 sticky-note-btn position-absolute w-100 h-100 shadow-none"
                                    type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                               <span class="d-block w-100 text-center sticky-note-btn__text"> #${heshTag}</span>
                            </button>
                            <div class="dropdown-menu sticky-note-block__dropdown border-0 p-0"
                                 aria-labelledby="dropdownMenuButton">
                                <div class="overflow-auto sticky-note-block__item">
                                    <h2 class="bg-white position-relative  sticky-note-block__dropdown__title">
                                        ${item.title}
                                    </h2>
                                    <p class="sticky-note-block__dropdown__description mb-0">
                                    ${item.description}
                                    </p>
                                </div>
                            </div>
                        </div>`
    })
    stickyNotes.innerHTML = stickyNoteItem

}

// initDictionaryList();
