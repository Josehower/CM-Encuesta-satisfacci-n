import React from 'react';
import RadialInput from './RadialInput';

const Forma = () => {
  return (
    <form
      name="encuesta"
      method="POST"
      enctype="application/x-www-form-urlencoded"
      action="/index.html"
      data-netlify="true"
    >
      <p>Califíque su nivel de satisfacción en los siguientes aspectos:</p>
      <RadialInput
        id={'expectativas'}
        name={'expectativas'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>1. ¿El ciclo de asesorías cumplió con sus expectativas?</p>
      </RadialInput>
      <RadialInput
        id={'crecimiento artístico'}
        name={'crecimiento artístico'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>
          2. ¿El servício prestado aporto de manera positiva a tu crecimiento
          artístico?
        </p>
      </RadialInput>
      <RadialInput
        id={'cumplió lo prometido'}
        name={'cumplió lo prometido'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>3. ¿El ciclo de asesorías cumplió lo prometido?</p>
      </RadialInput>
      <RadialInput
        id={'información presentada'}
        name={'información presentada'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>4. ¿Cuál fue la calidad de la información presentada?</p>
      </RadialInput>
      <RadialInput
        id={'metodología usada'}
        name={'metodología usada'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>
          5. ¿Cómo valoraria la metodología usada para exponer la información en
          las asesorías?
        </p>
      </RadialInput>
      <RadialInput
        id={'preparación de las asesorías'}
        name={'preparación de las asesorías'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>6. ¿Cómo valoraria la preparación por parte de los asesores?</p>
      </RadialInput>
      <RadialInput
        id={'trato personal'}
        name={'trato personal'}
        values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      >
        <p>7. ¿Cómo valoraria el trato personal hacia usted?</p>
      </RadialInput>
      <br /> <br />
      <hr />
      <br />
      <label>
        8. ¿Cuales fueron los tres temas que más le aportaron durante el ciclo
        de asesorías? <br />
        <br />
        - <input name="tema1" type="text" />
        <br />
        - <input name="tema2" type="text" />
        <br />
        - <input name="tema3" type="text" />
        <br />
      </label>
      <br /> <br />
      <label>
        9. ¿Cuales temas no estan incluidos en la asesorías, pero le hubiera
        gustado estudiar en el ciclo de asesorías?
        <br />
        <br />
        <textarea name="tema4" type="text" />
      </label>
      <br /> <br />
      <label>
        10. ¿Qué aspectos de la asesoría siente que pueden mejorar?
        <br />
        <br />
        <textarea name="mejora" type="text" />
      </label>
      <br />
      <RadialInput id={'recomienda'} name={'recomienda'} values={['si', 'no']}>
        <p>11. ¿Recomendaría el ciclo de asesorías a otros artistas?</p>
      </RadialInput>
      <br />
      <RadialInput
        id={'valor correcto'}
        name={'valor correcto'}
        values={[
          'si, el valor es correcto.',
          'no, la asesoría es muy económica respecto a su utilidad',
          'no, la asesoría es muy costosa respecto a su utilidad',
        ]}
      >
        <p>
          12. ¿Opina que el costo de la asesoría esta de acuerdo con la calidad
          de la misma?
        </p>
      </RadialInput>
      <br /> <br />
      <label>
        13. En caso de que su respuesta sea <span> NO</span>. ¿Cuánto cree usted
        que sería un precio adecuado para este ciclo de asesorías?
        <br /> <br />
        $ <input name="money" type="number" /> pesos Colombianos
      </label>
      <br /> <br />
      <label>
        14. Por favor describa en un párrafo corto su experiencia con Coaching
        Musical:
        <br />
        <br />
        <textarea name="tuExperiencia" type="text" />
      </label>
      <br /> <br />
      <button name="submit" type="submit">
        enviar
      </button>
    </form>
  );
};

export default Forma;
