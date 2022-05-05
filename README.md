## Hi there. Name is Sara, and I done this as a test asked by a Yieldstreet.

This is a reusable survey lib. With it, you can set your own survey. You need to edit `public/index.html` file, if you want to modify it.

# How run

- Make sure you have Node and Git installed
- Open your favorite Terminal
- Go to a directory you want to put this repository at
- Clone this
- Access this
- Run `npm i`
- Run `npm start`

# Running as a lib

- Download `react-survey` from: `https://drive.google.com/file/d/1DbhIaNRAfjyMJJyLhIy2rdp5iuM1rC_3/view?usp=sharing`
- Import it at your project
- Set up your survey

# Setting up your lib

- First, create a `reactSurvey` object at the script you want to use this
- Inside `reactSurvey` object, create a `steps` array
- For each step you want your survey to have, create a object containin `stepTitle`, which is a `string`, and a `fields` array
- For each field in that step you want, create a object with `fieldTitle` (`string`), `fieldType` (`string`, which can be `input`, `select`, `radio`, `checkbox`)
- Optional props for fields include:
  -- `options` (`string` array), for when you use `fieldType` as anything other than `input`
  -- `required` (`boolean`)

# Tech

- React
- Typescript
- Styled Components
- Styled Reset

# Things to consider

- I used a bit of what I understand about Atomic Design.
- No experience with testing, but would love to have a bit of time to learn.
- I did it with a whole lot of love.
