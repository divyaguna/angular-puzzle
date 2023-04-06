describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should mark book as finished in reading list, I should see "Want to Read" text changed to "Finished" after i marked book as finished in search results, I should be able to delete finished book in reading list and Removing a book will reset the finished status', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]')
      .find('.book--content--info button')
      .not('[disabled]')
      .eq(0)
      .click();

    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );

    cy.get('[data-testing="marked-as-finish-reading-button"]').click();

    cy.get('[data-testing="finished-reading-details"]').contains(
      'Finished reading'
    );

    cy.get('[data-testing="book-item"]')
      .find('.book--content--info button')
      .eq(0)
      .contains('Finished');

    cy.get('.reading-list-content')
      .find('.reading-list-item .mat-button-wrapper')
      .eq(0)
      .click();

    cy.get('[data-testing="book-item"]')
      .find('.book--content--info button')
      .not('[disabled]')
      .eq(0)
      .contains('Want to Read');
  });
});
