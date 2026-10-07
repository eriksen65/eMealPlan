export const madplaner = [
  {
    id: 'familie',
    navn: 'Familiens madplan',
    beskrivelse: 'Nem hverdagsmad som hele familien kan lide.',
    dage: [
      { dag: 'Mandag', ret: 'Spaghetti med kødsovs', ingredienser: ['Spaghetti', 'Hakket oksekød', 'Hakkede tomater', 'Løg', 'Gulerødder'] },
      { dag: 'Tirsdag', ret: 'Kyllingebryst med ovnkartofler', ingredienser: ['Kyllingebryst', 'Kartofler', 'Broccoli', 'Olivenolie'] },
      { dag: 'Onsdag', ret: 'Frikadeller med kartofler og brun sovs', ingredienser: ['Hakket svinekød', 'Kartofler', 'Løg', 'Mel', 'Smør'] },
      { dag: 'Torsdag', ret: 'Tacos', ingredienser: ['Tacoskaller', 'Hakket oksekød', 'Tacokrydderi', 'Salat', 'Tomat', 'Creme fraiche'] },
      { dag: 'Fredag', ret: 'Hjemmelavet pizza', ingredienser: ['Hvedemel', 'Gær', 'Hakkede tomater', 'Mozzarella', 'Skinke'] },
      { dag: 'Lørdag', ret: 'Boller i karry', ingredienser: ['Hakket svinekød', 'Karry', 'Ris', 'Bouillon', 'Fløde'] },
      { dag: 'Søndag', ret: 'Flæskesteg med rødkål', ingredienser: ['Flæskesteg', 'Rødkål', 'Kartofler', 'Salt'] },
    ],
  },
  {
    id: 'vegetar',
    navn: 'Vegetarisk madplan',
    beskrivelse: 'En uge fyldt med grønt, smag og variation.',
    dage: [
      { dag: 'Mandag', ret: 'Linsebolognese', ingredienser: ['Røde linser', 'Hakkede tomater', 'Løg', 'Gulerødder', 'Pasta'] },
      { dag: 'Tirsdag', ret: 'Grøntsagscurry med ris', ingredienser: ['Blomkål', 'Kikærter', 'Kokosmælk', 'Karrypasta', 'Ris'] },
      { dag: 'Onsdag', ret: 'Bagt søde kartofler med feta', ingredienser: ['Søde kartofler', 'Feta', 'Spinat', 'Olivenolie'] },
      { dag: 'Torsdag', ret: 'Falafel med hummus', ingredienser: ['Falafel', 'Hummus', 'Pitabrød', 'Agurk', 'Tomat'] },
      { dag: 'Fredag', ret: 'Svampe-risotto', ingredienser: ['Risottoris', 'Champignon', 'Parmesan', 'Grøntsagsbouillon', 'Løg'] },
      { dag: 'Lørdag', ret: 'Veggieburger', ingredienser: ['Bønnebøffer', 'Burgerboller', 'Salat', 'Tomat', 'Ketchup'] },
      { dag: 'Søndag', ret: 'Hjemmelavet lasagne med spinat', ingredienser: ['Lasagneplader', 'Spinat', 'Ricotta', 'Hakkede tomater', 'Ost'] },
    ],
  },
  {
    id: 'budget',
    navn: 'Budgetmadplan',
    beskrivelse: 'God mad til en lille pris.',
    dage: [
      { dag: 'Mandag', ret: 'Pasta med tomatsovs', ingredienser: ['Pasta', 'Hakkede tomater', 'Løg', 'Hvidløg'] },
      { dag: 'Tirsdag', ret: 'Æggekage med bacon', ingredienser: ['Æg', 'Bacon', 'Mel', 'Mælk', 'Tomat'] },
      { dag: 'Onsdag', ret: 'Kartoffelsuppe', ingredienser: ['Kartofler', 'Porrer', 'Gulerødder', 'Bouillon', 'Brød'] },
      { dag: 'Torsdag', ret: 'Risret med kylling', ingredienser: ['Ris', 'Kyllingelår', 'Ærter', 'Løg'] },
      { dag: 'Fredag', ret: 'Fiskefrikadeller med remoulade', ingredienser: ['Fiskefrikadeller', 'Kartofler', 'Remoulade', 'Citron'] },
      { dag: 'Lørdag', ret: 'Pølser med brød og salat', ingredienser: ['Pølser', 'Pølsebrød', 'Salat', 'Ketchup'] },
      { dag: 'Søndag', ret: 'Ovnbagt kylling med grønt', ingredienser: ['Hel kylling', 'Kartofler', 'Gulerødder', 'Persillerod'] },
    ],
  },
]

export function indkoebsliste(plan) {
  return [...new Set(plan.dage.flatMap((d) => d.ingredienser))].sort((a, b) =>
    a.localeCompare(b, 'da'),
  )
}
