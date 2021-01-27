//les types
// Boolean : une simple valeur pouvant être vraie (true) ou fausse (false );
// Number : un nombre flottant (ex. : 1.5) ;
// String : une chaîne de caractères (ex. : "Hello World") ;
// Any : un type désignant « n’importe quel type de données », équivalent du type object en JavaScript ;
// Void : un type désignant du vide, rien, aucune valeur, souvent utilisé pour préciser qu’une fonction/méthode ne retourne pas de valeur (on attend du vide, donc rien) ;
// Enum : un type de données permettant de créer son propre type de données customisé avec un choix prédéfini dans les valeurs (ex. : enum Color {Red, Green, Blue}) ;
// Array : un tableau pouvant contenir toutes sortes d’éléments (ex. : [10,true, "google"] ). On peut également définir le type de données d’un tableau (ex. : let tab:Array;) ;
// Null and Undefined : équivalent des types null et undefined JavaScript.

//les variables
// constante, ne peut être modifiée
const LIGHT_SPEED: string = "299 792 458 m / s";
// variable, peut être modifiée
let msg1: string = "Hello World";

//template string
let jedi = { surname: "Obiwan", name: "Kenobi" };
let msg2 = `${jedi.name} ${jedi.surname} is the Jedi Master`;
console.log(msg2);

//les fonctions
// les paramètres sont typés, et le type de la donnée
// retournée également à l'aide de la syntaxe suivante:
function sum(a: number, b: number): number {
  return a + b;
}

// quand une fonction ne retourne aucune donnée
// alors on le précise en utilisant le type "void"
function notif(msg: string): void {
  alert(msg);
}

// les fonctions anonymes sont également utilisables, comme en JS
let anonymous: Function = function(): void {
  console.log("I am an anonymous function");
};

// on peut invoquer une fonction anonyme comme en JS
anonymous();

// fonction fléchée anonyme avec valeur de paramètre par défaut
let hello = (param_user: string = "user"): void => {
  console.log("Hello", param_user);
};

hello(); // invoquons cette fonction

// les fonctions fléchées anonymes préservent le contexte
class Gandalf {
  name: string = "Gandalf";
  introduce = () => {
    console.log("Hello my name is", this.name);
  };
}

// testons notre code
new Gandalf().introduce();

//Les boucles
let i: number = 10;

// une boucle for classique en TypeScript
for (i = 0; i < 10; i++) {
  console.log(i);
}

// une boucle while classique en TypeScript
i = 10;
while (--i > -1) {
  console.log(i);
}

// une boucle do while classique en TypeScript
i = -1;
do {
  if (i == -1) {
    i = 10;
  }
} while (--i > -1);

//les tableaux
let notes: number[] = [0, 10, 12, 7, 8, 20, 13, 15];

// seconde façon de déclarer un tableau typé
let notes2: Array<number> = [0, 10, 12, 7, 8, 20, 13, 15];

//les enums
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

let haut: Direction = Direction.Up;
let bas: Direction = Direction.Down;
let gauche: Direction = Direction.Left;
let droite: Direction = Direction.Right;

console.log(haut, bas, gauche, droite);

//les modules
export function toto() {
  console.log("toto est beau");
}

//import { toto } from "./ts_modules_1";
toto();

//Les classes
class Hero {
  // une propriété peut être publique, protégée ou privée
  public name: string;
  public power: string;

  // la fonction constructrice est invoquée automatiquement
  // à la création d'un nouvel objet
  constructor(param_name: string, param_power: string) {
    // on attribue à nos propriétés les valeurs passées
    // en paramètres
    this.name = param_name;
    this.power = param_power;
  }

  // une méthode peut être publique, protégée ou privée
  public sayMyName(): void {
    console.log(this.name);
  }

  public sayMyPower(): void {
    console.log(this.power);
  }
}

let myHero: Hero = new Hero("Batman", "Being rich");
myHero.sayMyName();

class Personnage {
  // on veut transmettre cette propriété à nos enfants, on utilise donc protected
  protected name: string;
  // on veut transmettre cette propriété à nos enfants, on utilise donc protected
  protected lifepoint: number;
  constructor(param_name: string, param_lifepoint: number) {
    this.name = param_name;
    this.lifepoint = param_lifepoint;
  }

  //  on doit pouvoir demander à un personnage s'il est mort
  // sans être soi-même un personnage, la portée est donc publique
  public isDead(): boolean {
    // si le nombre de points de vie est inférieur
    // ou égal à 0 alors le personnage est mort
    if (this.lifepoint <= 0) {
      return true;
    } else {
      return false;
    }
  }

  public sayMyName(): void {
    console.log(this.name);
  }
}

class Wizard extends Personnage {
  constructor(param_name: string) {
    // on peut invoquer le constructor de la classe parente à l'aide de "super"
    super(param_name, 100);

    //... maintenant un nouvel objet de type wizard se nommera toujours
    // Gandalf et aura 100 points de vie
  }

  // on réécrit la méthode sayMyName définie par le parent
  // et héritée de celui-ci.
  public sayMyName(): void {
    //, mais on peut toujours invoquer l'ancienne "version" de la méthode
    // toujours à l'aide de "super"
    super.sayMyName();

    // si on veut, on peut ajouter des opérations supplémentaires
    console.log("I am a super magician !");
  }
}

// on crée un nouveau sorcier
let gandalf: Wizard = new Wizard("Gandalf");
// on crée un personnage Gollum qui possède 2 points de vie
let gollum: Personnage = new Personnage("Gollum", 2);

gandalf.sayMyName();
gollum.sayMyName();

class Voiture {
  nmbreChevaux: number;
  forces: number;
  moteur: number;

  constructor(
    param_nmbreChevaux: number,
    param_forces: number,
    param_moteur: number
  ) {
    this.nmbreChevaux;
  }

  public demarrer() {
    console.log("demarrer");
  }
}

let monAuto: Voiture = new Voiture(125, 550, 2.4);

class Toyota extends Voiture {
  accessoire: String;
}

class Honda extends Voiture {}

class Ford extends Voiture {}

let maToyota: Toyota = new Toyota(125, 550, 2.4);
maToyota.accessoire;
