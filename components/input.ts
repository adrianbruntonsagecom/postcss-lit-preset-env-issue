import { LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ns-button")
export class Button extends LitElement {
  static override styles = css`
    .button {
      columns: 3;

      &:focus,
      &:active {
        outline: none;
      }
    }
  `;
}

export default Button;
