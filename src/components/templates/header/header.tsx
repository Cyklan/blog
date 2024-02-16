import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex max-w-7xl items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <span className="inline-grid">
              <span className="[&::selection]:bg-blue-700/20 relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text text-5xl font-bold blur-xl [-webkit-text-fill-color:transparent] [&::selection]:text-base-content [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                FAHLE
              </span>
              <span className="[&::selection]:bg-blue-700/20 relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text text-5xl font-bold [-webkit-text-fill-color:transparent] [&::selection]:text-base-content [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                FAHLE
              </span>
            </span>
          </Link>
        </Container>
      </nav>
    </header>
  );
};
