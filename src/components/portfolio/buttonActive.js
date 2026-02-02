import React, { useState } from 'react';

const ButtonGroup = () => {
  const [activeId, setActiveId] = useState(null);

  const buttons = [
    { id: 1, text: 'Кнопка 1', content: ('Тут описание работ, созданных в Photoshop') },
    { id: 2, text: 'Кнопка 2', content: 'Контент для второй кнопки' },
    { id: 3, text: 'Кнопка 3', content: 'Содержимое третьей вкладки' },
  ];

  // Находим объект выбранной кнопки по её id
  const activeBtn = buttons.find(btn => btn.id === activeId);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveId(btn.id)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeId === btn.id ? 'skyblue' : 'lightgray',
              color: activeId === btn.id ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {btn.text}
          </button>
        ))}
      </div>

      {/* Выводим текст, только если activeId не null */}
      <div style={{ padding: '15px', border: '1px solid #ccc' }}>
        {activeBtn ? activeBtn.content : "Выберите категорию"}
      </div>
    </div>
  );
};
export default ButtonGroup;