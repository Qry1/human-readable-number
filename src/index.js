module.exports = function toReadable (number) {
   let a = number.toString();
   if (a.length === 1 || a.length === 2) {
      if (a === '1' || a === '01') return 'one';
      if (a === '2' || a === '02') return 'two';
      if (a === '3' || a === '03') return 'three';
      if (a === '4' || a === '04') return 'four';
      if (a === '5' || a === '05') return 'five';
      if (a === '6' || a === '06') return 'six';
      if (a === '7' || a === '07') return 'seven';
      if (a === '8' || a === '08') return 'eight';
      if (a === '9' || a === '09') return 'nine';
      if (a === '0') return 'zero';
   }
   if (a.length === 2) {
      if (a === '00') return;
      if (a === '10') return 'ten';
      if (a === '11') return 'eleven';
      if (a === '12') return 'twelve';
      if (a === '13') return 'thirteen';
      if (a === '14') return 'fourteen';
      if (a === '15') return 'fifteen';
      if (a === '16') return 'sixteen';
      if (a === '17') return 'seventeen';
      if (a === '18') return 'eighteen';
      if (a === '19') return 'nineteen';
      if (a === '20') return `twenty`;
      if (a === '30') return `thirty`;
      if (a === '40') return `forty`;
      if (a === '50') return `fifty`;
      if (a === '60') return `sixty`;
      if (a === '70') return `seventy`;
      if (a === '80') return `eighty`;
      if (a === '90') return `ninety`;
      if (a[0] === '2') return `twenty ${toReadable(a[1])}`;
      if (a[0] === '3') return `thirty ${toReadable(a[1])}`;
      if (a[0] === '4') return `forty ${toReadable(a[1])}`;
      if (a[0] === '5') return `fifty ${toReadable(a[1])}`;
      if (a[0] === '6') return `sixty ${toReadable(a[1])}`;
      if (a[0] === '7') return `seventy ${toReadable(a[1])}`;
      if (a[0] === '8') return `eighty ${toReadable(a[1])}`;
      if (a[0] === '9') return `ninety ${toReadable(a[1])}`;
   }
   if (a.length === 3) {
      if (a === '100') return `one hundred`;
      if (a === '200') return `two hundred`;
      if (a === '300') return `three hundred`;
      if (a === '400') return `four hundred`;
      if (a === '500') return `five hundred`;
      if (a === '600') return `six hundred`;
      if (a === '700') return `seven hundred`;
      if (a === '800') return `eight hundred`;
      if (a === '900') return `nine hundred`;
      if (a[0] === '1') return `one hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '2') return `two hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '3') return `three hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '4') return `four hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '5') return `five hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '6') return `six hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '7') return `seven hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '8') return `eight hundred ${toReadable(a.slice(1))}`;
      if (a[0] === '9') return `nine hundred ${toReadable(a.slice(1))}`;
   }
}

