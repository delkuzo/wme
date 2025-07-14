# Интеграция Gravity UI

## Обзор

Gravity UI - это дизайн-система от Яндекса, которую мы интегрировали в наш проект для параллельных экспериментов с внешними компонентами.

**Ссылка:** https://gravity-ui.com/

⚠️ **Важное замечание:** Gravity UI - это React/Vue библиотека, а не CSS-фреймворк. Для полноценного использования нужен React или Vue проект.

## Структура интеграции

### Файлы
- `эксперименты/gravity-ui-playground.html` - основной playground для экспериментов
- `GRAVITY_UI_INTEGRATION.md` - эта документация

### Подключение

#### Для React/Vue проекта:
```bash
npm install @gravity-ui/uikit
```

#### Для CSS-only экспериментов:
```html
<!-- Gravity UI CSS (ограниченная функциональность) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gravity-ui/uikit@latest/dist/css/styles.css">

<!-- Наши стили для интеграции -->
<link rel="stylesheet" href="../styles/fonts.css">
<link rel="stylesheet" href="../styles/design-tokens.css">
```

## Основные компоненты Gravity UI

### Кнопки (React)
```jsx
import {Button} from '@gravity-ui/uikit';

// Primary
<Button view="action" size="m">Primary Button</Button>

// Secondary  
<Button view="normal" size="m">Secondary Button</Button>

// Outline
<Button view="outline" size="m">Outline Button</Button>

// Raised
<Button view="raised" size="m">Raised Button</Button>
```

### Кнопки (CSS-only эксперименты)
```html
<!-- Primary -->
<button style="background: #0052cc; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 14px; cursor: pointer;">
    Primary Button
</button>

<!-- Secondary -->
<button style="background: transparent; color: #0052cc; border: 1px solid #0052cc; padding: 8px 16px; border-radius: 8px; font-size: 14px; cursor: pointer;">
    Secondary Button
</button>
```

### Формы (React)
```jsx
import {TextInput, Select} from '@gravity-ui/uikit';

// Text Input
<TextInput size="m" placeholder="Введите текст" />

// Text Input с ошибкой
<TextInput size="m" placeholder="Ошибка" error="Обязательное поле" />

// Select
<Select size="m">
    <Select.Option value="option1">Опция 1</Select.Option>
    <Select.Option value="option2">Опция 2</Select.Option>
</Select>
```

### Формы (CSS-only эксперименты)
```html
<!-- Text Input -->
<input type="text" placeholder="Введите текст" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px;">

<!-- Text Input с ошибкой -->
<input type="text" placeholder="Ошибка" style="padding: 8px 12px; border: 1px solid #ff3b30; border-radius: 8px; font-size: 14px;">
<div style="color: #ff3b30; font-size: 12px;">Обязательное поле</div>

<!-- Select -->
<select style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; background: white;">
    <option>Выберите опцию</option>
    <option>Опция 1</option>
    <option>Опция 2</option>
</select>
```

### Карточки (React)
```jsx
import {Card} from '@gravity-ui/uikit';

<Card size="m">
    <Card.Content>
        <h3>Заголовок карточки</h3>
        <p>Содержимое карточки</p>
    </Card.Content>
</Card>
```

### Карточки (CSS-only эксперименты)
```html
<div style="padding: 20px; border: 1px solid #ddd; border-radius: 12px; background: white;">
    <h3 style="margin: 0 0 12px 0; font-size: 18px;">Заголовок карточки</h3>
    <p style="margin: 0; color: #666;">Содержимое карточки</p>
</div>
```

## Сравнение с нашей дизайн-системой

| Аспект | Gravity UI | Наша ДС |
|--------|------------|---------|
| **Подход** | Готовая система | Кастомная разработка |
| **Гибкость** | Ограниченная | Высокая |
| **Брендинг** | Стандартный | Кастомный |
| **Размер** | Большой | Компактный |
| **Поддержка** | Команда Яндекса | Наша команда |

## Преимущества Gravity UI

### ✅ Плюсы
- **Готовая система** - не нужно разрабатывать с нуля
- **Протестированная** - используется в реальных проектах Яндекса
- **Документированная** - подробная документация и примеры
- **Активно развивается** - регулярные обновления
- **TypeScript поддержка** - для React/Vue компонентов

### ❌ Минусы
- **Ограниченная кастомизация** - сложно изменить под бренд
- **Большой размер** - много неиспользуемых компонентов
- **Зависимость** - привязанность к внешней библиотеке
- **Стилистические ограничения** - дизайн "по умолчанию"

## Стратегия использования

### 1. Эксперименты и прототипирование
- Используйте Gravity UI для быстрого создания прототипов
- Тестируйте идеи без разработки компонентов с нуля
- Сравнивайте подходы с нашей дизайн-системой

### 2. Гибридный подход
- Смешивайте компоненты обеих систем
- Используйте Gravity UI для сложных компонентов
- Наша ДС для кастомизации и брендинга

### 3. Обучение и анализ
- Изучайте архитектуру Gravity UI
- Анализируйте лучшие практики
- Применяйте полезные паттерны в нашей системе

## Примеры интеграции

### Гибридная кнопка
```html
<!-- Gravity UI кнопка с нашими цветами -->
<button class="g-button g-button_view_action g-button_size_m" 
        style="background: var(--color-accent, #FF6F61); border-color: var(--color-accent, #FF6F61);">
    Гибридная кнопка
</button>
```

### Кастомная форма
```html
<!-- Наша форма с Gravity UI валидацией -->
<div class="g-text-input g-text-input_size_m g-text-input_has_error">
    <input class="g-text-input__control" type="text" placeholder="Email">
    <div class="g-text-input__error">Неверный формат email</div>
</div>
```

## Рекомендации

### Когда использовать Gravity UI
- ✅ Быстрое прототипирование
- ✅ Сложные компоненты (таблицы, календари)
- ✅ Временные решения
- ✅ Изучение паттернов

### Когда использовать нашу ДС
- ✅ Финальные интерфейсы
- ✅ Кастомизация под бренд
- ✅ Простые компоненты
- ✅ Долгосрочные проекты

## Планы развития

### Краткосрочные (1-2 недели)
- [ ] Тестирование всех основных компонентов
- [ ] Создание гибридных примеров
- [ ] Документирование лучших практик

### Среднесрочные (1-2 месяца)
- [ ] Интеграция в реальные проекты
- [ ] Создание адаптеров между системами
- [ ] Оптимизация производительности

### Долгосрочные (3+ месяца)
- [ ] Выбор основной стратегии
- [ ] Миграция или отказ от Gravity UI
- [ ] Улучшение нашей дизайн-системы

## Полезные ссылки

- [Gravity UI Документация](https://gravity-ui.com/)
- [GitHub репозиторий](https://github.com/gravity-ui/uikit)
- [Компоненты](https://gravity-ui.com/uikit/components)
- [Примеры](https://gravity-ui.com/uikit/examples)

---

**Статус:** Активная интеграция  
**Последнее обновление:** $(date)  
**Версия Gravity UI:** Latest 