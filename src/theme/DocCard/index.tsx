import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import {usePluralForm} from '@docusaurus/theme-common';
import isInternalUrl from '@docusaurus/isInternalUrl';
import {translate} from '@docusaurus/Translate';

import type {Props} from '@theme/DocCard';
import Heading from '@theme/Heading';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

import styles from './styles.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// Icons - conditionally load based on the token availability
import {
  faFolderOpen,
  faBook,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'; // Fallback classic icons

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

function CardContainer({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

function CardLayout({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
}): JSX.Element {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}>
        {icon} {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }

  return (
    <CardLayout
      href={href}
      icon={
        <FontAwesomeIcon icon={faFolderOpen} className={styles.docCardIcon} />
      }
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({item}: {item: PropSidebarItemLink}): JSX.Element {
  const icon = isInternalUrl(item.href) ? (
    <FontAwesomeIcon icon={faBook} className={styles.docCardIcon} />
  ) : (
    <FontAwesomeIcon
      icon={faArrowUpRightFromSquare}
      className={styles.docCardIcon}
    />
  );
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={
        item.description ??
        (doc?.description != '<Heading' && doc?.description != '<span')
          ? doc?.description
          : item.label
      }
    />
  );
}

export default function DocCard({item}: Props): JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
