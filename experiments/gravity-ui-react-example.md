# Gravity UI React Пример

## Создание React проекта с Gravity UI

### 1. Создание проекта
```bash
# Создаем новый React проект
npx create-react-app gravity-ui-demo
cd gravity-ui-demo

# Устанавливаем Gravity UI
npm install @gravity-ui/uikit

# Запускаем проект
npm start
```

### 2. Основной компонент App.js
```jsx
import React, {useState} from 'react';
import {
  Button,
  TextInput,
  Select,
  Card,
  ThemeProvider,
  configure
} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/dist/styles.css';

// Настройка темы
configure({
  lang: 'ru'
});

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  return (
    <ThemeProvider>
      <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
        <h1>Gravity UI Demo</h1>
        
        {/* Кнопки */}
        <Card size="m" style={{marginBottom: '20px'}}>
          <Card.Content>
            <h3>Кнопки</h3>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <Button view="action" size="m">
                Primary Button
              </Button>
              <Button view="normal" size="m">
                Secondary Button
              </Button>
              <Button view="outline" size="m">
                Outline Button
              </Button>
              <Button view="raised" size="m">
                Raised Button
              </Button>
            </div>
          </Card.Content>
        </Card>

        {/* Формы */}
        <Card size="m" style={{marginBottom: '20px'}}>
          <Card.Content>
            <h3>Формы</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px'}}>
              <TextInput
                size="m"
                placeholder="Введите текст"
                value={inputValue}
                onUpdate={setInputValue}
              />
              <TextInput
                size="m"
                placeholder="Ошибка"
                error="Обязательное поле"
              />
              <Select
                size="m"
                value={selectValue}
                onUpdate={setSelectValue}
                placeholder="Выберите опцию"
              >
                <Select.Option value="option1">Опция 1</Select.Option>
                <Select.Option value="option2">Опция 2</Select.Option>
                <Select.Option value="option3">Опция 3</Select.Option>
              </Select>
            </div>
          </Card.Content>
        </Card>

        {/* Таблица */}
        <Card size="m" style={{marginBottom: '20px'}}>
          <Card.Content>
            <h3>Таблица</h3>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '1px solid #ddd'}}>
                  <th style={{padding: '12px', textAlign: 'left'}}>Имя</th>
                  <th style={{padding: '12px', textAlign: 'left'}}>Email</th>
                  <th style={{padding: '12px', textAlign: 'left'}}>Роль</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '12px'}}>Иван Иванов</td>
                  <td style={{padding: '12px'}}>ivan@example.com</td>
                  <td style={{padding: '12px'}}>Администратор</td>
                </tr>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '12px'}}>Петр Петров</td>
                  <td style={{padding: '12px'}}>petr@example.com</td>
                  <td style={{padding: '12px'}}>Пользователь</td>
                </tr>
              </tbody>
            </table>
          </Card.Content>
        </Card>

        {/* Модальное окно */}
        <Card size="m">
          <Card.Content>
            <h3>Модальное окно</h3>
            <Button view="action" size="m">
              Открыть модальное окно
            </Button>
          </Card.Content>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 3. Компонент с модальным окном
```jsx
import React, {useState} from 'react';
import {
  Button,
  Modal,
  TextInput,
  Select
} from '@gravity-ui/uikit';

function ModalExample() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleSubmit = () => {
    console.log('Form data:', formData);
    setOpen(false);
  };

  return (
    <>
      <Button view="action" size="m" onClick={() => setOpen(true)}>
        Открыть модальное окно
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title>Добавить пользователя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <TextInput
              size="m"
              placeholder="Имя"
              value={formData.name}
              onUpdate={(value) => setFormData({...formData, name: value})}
            />
            <TextInput
              size="m"
              placeholder="Email"
              value={formData.email}
              onUpdate={(value) => setFormData({...formData, email: value})}
            />
            <Select
              size="m"
              value={formData.role}
              onUpdate={(value) => setFormData({...formData, role: value})}
              placeholder="Выберите роль"
            >
              <Select.Option value="admin">Администратор</Select.Option>
              <Select.Option value="user">Пользователь</Select.Option>
              <Select.Option value="moderator">Модератор</Select.Option>
            </Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button view="normal" size="m" onClick={() => setOpen(false)}>
            Отмена
          </Button>
          <Button view="action" size="m" onClick={handleSubmit}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;
```

### 4. Настройка темы
```jsx
import {ThemeProvider, configure} from '@gravity-ui/uikit';

// Настройка языка
configure({
  lang: 'ru'
});

// Кастомная тема
const customTheme = {
  color: {
    primary: '#FF6F61', // Наш акцентный цвет
    secondary: '#34C759',
    error: '#FF3B30'
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Ваши компоненты */}
    </ThemeProvider>
  );
}
```

### 5. Интеграция с нашими стилями
```jsx
import React from 'react';
import {Button} from '@gravity-ui/uikit';
import '../styles/design-tokens.css';

// Гибридный компонент
function HybridButton({children, ...props}) {
  return (
    <Button
      {...props}
      style={{
        '--g-color-base-primary': 'var(--color-accent, #FF6F61)',
        '--g-color-base-secondary': 'var(--color-foreground, #222)'
      }}
    >
      {children}
    </Button>
  );
}
```

## Преимущества React версии

### ✅ Полная функциональность
- Все компоненты работают как задумано
- Встроенная валидация форм
- Модальные окна и попапы
- Сложные компоненты (таблицы, календари)

### ✅ TypeScript поддержка
- Полная типизация компонентов
- Автодополнение в IDE
- Проверка типов на этапе компиляции

### ✅ Кастомизация
- Настройка темы через ThemeProvider
- Переопределение стилей
- Интеграция с нашими дизайн-токенами

### ✅ Производительность
- Оптимизированные компоненты
- Ленивая загрузка
- Tree shaking

## Рекомендации

1. **Для новых проектов** - используйте React версию
2. **Для экспериментов** - используйте CSS-only playground
3. **Для интеграции** - создайте гибридные компоненты
4. **Для обучения** - изучайте исходный код Gravity UI

---

**Статус:** Готов к использованию  
**Сложность:** Средняя (требует знания React)  
**Рекомендация:** Для полноценной интеграции 