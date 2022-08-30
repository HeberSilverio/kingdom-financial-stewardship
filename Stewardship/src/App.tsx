import { useState } from 'react';
import * as C from './App.styles'; // C esta criando div
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {
   const [list, setList] = useState(items);

  return (
    <C.Container>
      <C.Header>
         <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
         {/* Seção de informações */}

         {/* Seção de inserção infirmações */}

         {/* Seção de tabela de itens */}
         
      </C.Body>
    </C.Container>   
  );
}

export default App;
