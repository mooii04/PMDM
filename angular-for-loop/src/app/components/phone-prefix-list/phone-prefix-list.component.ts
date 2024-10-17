import { Component } from '@angular/core';

export interface CountryPhone {
  nombre: string;
  flag: string;
  prefix: number[];
}

const COUNTRY_PREFIXES: CountryPhone[] = [
  { nombre: 'España', flag: 'spain/spaing_640', prefix: [34] },
  { nombre: 'Francia', flag: 'france/france_640', prefix: [33] },
  { nombre: 'Italia', flag: 'italy/italy_640', prefix: [39] },
  { nombre: 'Portugal', flag: 'portugal/portugal_640', prefix: [351] },
  { nombre: 'Alemania', flag: 'germany/germany_640', prefix: [49] },
  { nombre: 'Reino Unido', flag: 'united-kingdom/united-kingdom_640', prefix: [44] },
  { nombre: 'Estados Unidos', flag: 'united-states/united-states_640', prefix: [1] },
  { nombre: 'Japón', flag: 'japan/japan_640', prefix: [81] },
  { nombre: 'China', flag: 'china/china_640', prefix: [86] },
  { nombre: 'Rusia', flag: 'russia/russia_640', prefix: [7] },
  { nombre: 'Brasil', flag: 'brazil/brazil_640', prefix: [55] },
  { nombre: 'Argentina', flag: 'argentina/argentina_640', prefix: [54] },
  { nombre: 'Chile', flag: 'chile/chile_640', prefix: [56] },
  { nombre: 'México', flag: 'mexico/mexico_640', prefix: [52] },
  { nombre: 'Colombia', flag: 'colombia/colombia_640', prefix: [57] },
  { nombre: 'Perú', flag: 'peru/peru_640', prefix: [51] },
  { nombre: 'Ecuador', flag: 'ecuador/ecuador_640', prefix: [593] },
  { nombre: 'Venezuela', flag: 'venezuela/venezuela_640', prefix: [58] },
  { nombre: 'Uruguay', flag: 'uruguay/uruguay_640', prefix: [598] },
  { nombre: 'Paraguay', flag: 'paraguay/paraguay_640', prefix: [595] },
  { nombre: 'Bolivia', flag: 'bolivia/bolivia_640', prefix: [591] },
  { nombre: 'Costa Rica', flag: 'costa-rica/costa-rica_640', prefix: [506] },
  { nombre: 'Cuba', flag: 'cuba/cuba_640', prefix: [53] },
  { nombre: 'El Salvador', flag: 'el-salvador/el-salvador_640', prefix: [503] },
  { nombre: 'Guatemala', flag: 'guatemala/guatemala_640', prefix: [502] },
  { nombre: 'Honduras', flag: 'honduras/honduras_640', prefix: [504] },
  { nombre: 'Nicaragua', flag: 'nicaragua/nicaragua_640', prefix: [505] },
  { nombre: 'Canadá', flag: 'canada/canada_640', prefix: [1, 2] },
];

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css'
})
export class PhonePrefixListComponent {
  countryPhoneList = COUNTRY_PREFIXES;

  getCountryFlag(flag: string): string {
    return `assets/flags/${flag}.png`;
  }


}
