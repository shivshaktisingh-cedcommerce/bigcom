import { TableRow, TableCell } from '@mui/material';
import EmptyContent from '../EmptyContent';
import NoContent from '../../../src/assets/images/no-content.png';
import { useTranslation } from 'react-i18next';

type Props = {
  isNotFound: boolean;
  Message: string;
};

export default function TableNoData({ isNotFound, Message }: Props) {
  const { t } = useTranslation();

  return (
    <>
      {isNotFound ? (
        <TableRow>
          <TableCell colSpan={9}>
            <EmptyContent
              title={t('no') + ' ' + Message + ' ' + t('has_been_found')}
              sx={{
                '& span.MuiBox-root': { height: 160 },
              }}
              img={NoContent}
            />
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0 }} />
        </TableRow>
      )}
    </>
  );
}
