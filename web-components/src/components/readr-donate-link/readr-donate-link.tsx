import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'readr-donate-link',
  styleUrl: 'readr-donate-link.css',
  shadow: true,
})
export class ReadrDonateLink {
  render() {
    return (
      <Host>
        <a
          href="https://www.readr.tw/donate"
          target="_blank"
          rel="noreferrer noopener"
        >
          贊助 READr 一起進行新聞媒體實驗改革
        </a>
      </Host>
    );
  }
}
