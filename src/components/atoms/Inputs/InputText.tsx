import styled from 'styled-components';

const InputText = styled.input<{ error?: boolean; success?: boolean }>`
  padding: 5px 8px;

  width: 100%;
  height: 26px;

  color: ${({ error, success, theme }) =>
    (error && theme.globals.colors.error) || (success && theme.globals.colors.success) || 'inherit'};

  background-color: transparent;
  border-radius: 2px;
  border: 1px solid
    ${({ error, success, theme }) =>
      (error && theme.globals.colors.error) || (success && theme.globals.colors.success) || theme.globals.inputBorder};

  &::placeholder {
    color: ${({ theme }) => theme.globals.inputPlaceholderColor};
  }

  transition: all ${({ theme }) => theme.globals.timingFunctionMain};

  // &:hover {
  //   border-color: ${({ theme }) => theme.accentColor.base};
  //   box-shadow: 0 0 5px ${({ theme }) => theme.accentColor.light};
  // }
`;

export default InputText;
