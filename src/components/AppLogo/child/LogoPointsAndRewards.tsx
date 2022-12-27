import { Link as RouterLink } from 'react-router-dom';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function LogoPointsAndRewards({
  disabledLink = false,
  sx,
}: Props) {
  const logo = (
    <Box sx={{ ...sx }}>
      <svg
        width='180'
        height='64'
        viewBox='0 0 916 390'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width='916' height='390' rx='40' fill='white' />
        <path
          d='M409.332 293.667C408.105 293.667 407.067 293.506 406.218 293.184C405.382 292.862 404.695 292.452 404.156 291.956C403.617 291.445 403.199 290.929 402.902 290.405C402.606 289.868 402.39 289.398 402.255 288.996L401.851 293.264H399V263.342H402.761V275.746C402.936 275.397 403.199 275.014 403.549 274.598C403.913 274.182 404.378 273.779 404.944 273.39C405.511 273.001 406.178 272.679 406.946 272.423C407.728 272.168 408.618 272.041 409.615 272.041C412.23 272.041 414.306 272.947 415.842 274.759C417.393 276.572 418.168 279.243 418.168 282.773C418.168 284.962 417.837 286.875 417.177 288.512C416.516 290.137 415.532 291.405 414.225 292.318C412.917 293.217 411.286 293.667 409.332 293.667ZM408.665 290.808C410.363 290.808 411.745 290.157 412.81 288.855C413.874 287.539 414.407 285.452 414.407 282.592C414.407 280.162 413.908 278.283 412.911 276.954C411.927 275.612 410.484 274.94 408.584 274.94C407.195 274.94 406.077 275.243 405.227 275.847C404.392 276.437 403.772 277.303 403.367 278.444C402.976 279.585 402.774 280.968 402.761 282.592C402.761 285.505 403.212 287.606 404.115 288.895C405.032 290.17 406.548 290.808 408.665 290.808Z'
          fill='#919EAB'
        />
        <path
          d='M424.362 299.909C423.135 299.909 422.293 299.822 421.834 299.648C421.376 299.473 421.147 299.386 421.147 299.386V296.969L423.27 297.01C424.052 297.037 424.699 296.983 425.211 296.849C425.723 296.714 426.134 296.533 426.444 296.305C426.754 296.077 426.99 295.822 427.152 295.54C427.327 295.258 427.469 294.989 427.576 294.734L428.304 292.761L420.136 272.444H423.917L430.084 288.512L436.21 272.444H439.87L431.054 294.835C430.515 296.151 429.908 297.178 429.234 297.916C428.574 298.654 427.833 299.171 427.01 299.466C426.202 299.762 425.319 299.909 424.362 299.909Z'
          fill='#919EAB'
        />
        <path
          d='M453.791 293.264V264.147H458.967L467.783 288.19L476.719 264.147H481.875V293.264H478.013V269.725L469.542 293.264H466.044L457.633 269.947V293.264H453.791Z'
          fill='#919EAB'
        />
        <path
          d='M494.505 293.667C493.157 293.667 491.964 293.432 490.926 292.962C489.888 292.479 489.072 291.788 488.479 290.888C487.9 289.989 487.61 288.902 487.61 287.626C487.61 285.317 488.419 283.599 490.036 282.471C491.654 281.344 494.248 280.74 497.82 280.659L501.561 280.558V278.927C501.561 277.652 501.177 276.645 500.409 275.907C499.64 275.155 498.447 274.779 496.83 274.779C495.63 274.793 494.572 275.075 493.655 275.625C492.752 276.176 492.166 277.075 491.896 278.323H488.601C488.681 276.968 489.066 275.826 489.753 274.9C490.441 273.961 491.398 273.249 492.624 272.766C493.864 272.283 495.327 272.041 497.012 272.041C498.831 272.041 500.341 272.296 501.541 272.806C502.754 273.316 503.657 274.068 504.25 275.061C504.857 276.055 505.16 277.276 505.16 278.726V293.264H501.965L501.703 289.358C500.894 290.982 499.863 292.11 498.609 292.741C497.369 293.358 496.001 293.667 494.505 293.667ZM495.637 290.989C496.338 290.989 497.032 290.861 497.719 290.606C498.42 290.351 499.061 290.009 499.64 289.579C500.22 289.136 500.678 288.647 501.015 288.11C501.366 287.559 501.548 286.995 501.561 286.418V282.854L498.447 282.914C496.857 282.941 495.522 283.102 494.444 283.398C493.379 283.693 492.577 284.156 492.038 284.787C491.512 285.418 491.249 286.244 491.249 287.264C491.249 288.432 491.654 289.345 492.462 290.002C493.285 290.66 494.343 290.989 495.637 290.989Z'
          fill='#919EAB'
        />
        <path
          d='M529.906 293.264H525.943L519.392 282.814L515.268 287.062V293.264H511.547V263.342H515.268V282.854L525.094 272.444H529.38L521.839 280.377L529.906 293.264Z'
          fill='#919EAB'
        />
        <path
          d='M536.094 283.72C536.094 285.035 536.309 286.23 536.741 287.304C537.186 288.365 537.853 289.21 538.743 289.841C539.646 290.472 540.771 290.788 542.119 290.788C543.454 290.788 544.599 290.479 545.556 289.861C546.527 289.244 547.147 288.351 547.416 287.183H550.955C550.699 288.593 550.133 289.781 549.256 290.747C548.38 291.714 547.322 292.446 546.082 292.942C544.842 293.426 543.548 293.667 542.2 293.667C540.245 293.667 538.527 293.244 537.044 292.399C535.561 291.553 534.402 290.338 533.566 288.754C532.731 287.17 532.313 285.27 532.313 283.055C532.313 280.867 532.69 278.948 533.445 277.296C534.2 275.645 535.292 274.357 536.721 273.43C538.163 272.504 539.895 272.041 541.917 272.041C543.885 272.041 545.55 272.464 546.911 273.309C548.272 274.155 549.304 275.35 550.004 276.894C550.719 278.424 551.076 280.243 551.076 282.351V283.72H536.094ZM536.114 281.203H547.477C547.477 280.008 547.275 278.934 546.871 277.981C546.466 277.015 545.846 276.256 545.01 275.706C544.188 275.142 543.15 274.86 541.897 274.86C540.589 274.86 539.504 275.175 538.641 275.806C537.792 276.424 537.152 277.223 536.721 278.203C536.303 279.169 536.101 280.169 536.114 281.203Z'
          fill='#919EAB'
        />
        <path
          d='M588.968 264.147L580.435 293.264H576.978L570.569 270.692L564.058 293.264H560.702L552.27 264.147H556.051L562.521 287.324L569.113 264.147H572.044L578.616 287.324L585.207 264.147H588.968Z'
          fill='#919EAB'
        />
        <path
          d='M593.868 283.72C593.868 285.035 594.084 286.23 594.515 287.304C594.96 288.365 595.627 289.21 596.517 289.841C597.42 290.472 598.545 290.788 599.893 290.788C601.228 290.788 602.374 290.479 603.331 289.861C604.301 289.244 604.921 288.351 605.191 287.183H608.729C608.473 288.593 607.907 289.781 607.031 290.747C606.155 291.714 605.096 292.446 603.856 292.942C602.616 293.426 601.322 293.667 599.974 293.667C598.02 293.667 596.301 293.244 594.818 292.399C593.336 291.553 592.176 290.338 591.341 288.754C590.505 287.17 590.087 285.27 590.087 283.055C590.087 280.867 590.465 278.948 591.219 277.296C591.974 275.645 593.066 274.357 594.495 273.43C595.937 272.504 597.669 272.041 599.691 272.041C601.659 272.041 603.324 272.464 604.685 273.309C606.047 274.155 607.078 275.35 607.779 276.894C608.493 278.424 608.85 280.243 608.85 282.351V283.72H593.868ZM593.888 281.203H605.251C605.251 280.008 605.049 278.934 604.645 277.981C604.24 277.015 603.62 276.256 602.785 275.706C601.962 275.142 600.925 274.86 599.671 274.86C598.363 274.86 597.278 275.175 596.416 275.806C595.566 276.424 594.926 277.223 594.495 278.203C594.077 279.169 593.875 280.169 593.888 281.203Z'
          fill='#919EAB'
        />
        <path
          d='M624.317 293.667C623.09 293.667 622.052 293.506 621.203 293.184C620.368 292.862 619.68 292.452 619.141 291.956C618.602 291.445 618.184 290.929 617.887 290.405C617.591 289.868 617.375 289.398 617.24 288.996L616.836 293.264H613.985V263.342H617.746V275.746C617.921 275.397 618.184 275.014 618.534 274.598C618.898 274.182 619.363 273.779 619.929 273.39C620.496 273.001 621.163 272.679 621.931 272.423C622.713 272.168 623.603 272.041 624.6 272.041C627.215 272.041 629.291 272.947 630.828 274.759C632.378 276.572 633.153 279.243 633.153 282.773C633.153 284.962 632.822 286.875 632.162 288.512C631.501 290.137 630.517 291.405 629.21 292.318C627.902 293.217 626.271 293.667 624.317 293.667ZM623.65 290.808C625.348 290.808 626.73 290.157 627.795 288.855C628.86 287.539 629.392 285.452 629.392 282.592C629.392 280.162 628.893 278.283 627.896 276.954C626.912 275.612 625.469 274.94 623.569 274.94C622.181 274.94 621.062 275.243 620.213 275.847C619.377 276.437 618.757 277.303 618.352 278.444C617.961 279.585 617.759 280.968 617.746 282.592C617.746 285.505 618.197 287.606 619.1 288.895C620.017 290.17 621.533 290.808 623.65 290.808Z'
          fill='#919EAB'
        />
        <path
          d='M639.04 293.264V264.147H648.442C652 264.147 654.689 264.799 656.509 266.101C658.342 267.403 659.259 269.282 659.259 271.739C659.259 273.283 658.855 274.605 658.046 275.706C657.25 276.806 655.849 277.713 653.84 278.424C654.986 278.666 655.95 279.015 656.732 279.471C657.527 279.928 658.16 280.465 658.632 281.082C659.117 281.686 659.461 282.357 659.663 283.096C659.879 283.834 659.987 284.613 659.987 285.431C659.987 288.063 659.043 290.029 657.156 291.331C655.283 292.62 652.479 293.264 648.745 293.264H639.04ZM642.78 290.163H648.705C651.144 290.163 652.998 289.767 654.265 288.975C655.545 288.17 656.186 286.935 656.186 285.27C656.186 284.049 655.869 283.062 655.235 282.31C654.615 281.545 653.773 280.988 652.708 280.639C651.643 280.29 650.457 280.115 649.149 280.115H642.78V290.163ZM642.78 276.954H649.149C649.918 276.954 650.679 276.88 651.434 276.733C652.189 276.585 652.883 276.33 653.517 275.967C654.15 275.605 654.662 275.122 655.053 274.518C655.444 273.9 655.64 273.128 655.64 272.202C655.64 270.511 654.986 269.262 653.678 268.457C652.384 267.638 650.7 267.228 648.624 267.228H642.78V276.954Z'
          fill='#919EAB'
        />
        <path
          d='M668.228 283.72C668.228 285.035 668.444 286.23 668.875 287.304C669.32 288.365 669.987 289.21 670.877 289.841C671.78 290.472 672.906 290.788 674.254 290.788C675.588 290.788 676.734 290.479 677.691 289.861C678.661 289.244 679.281 288.351 679.551 287.183H683.089C682.833 288.593 682.267 289.781 681.391 290.747C680.515 291.714 679.457 292.446 678.216 292.942C676.976 293.426 675.682 293.667 674.334 293.667C672.38 293.667 670.661 293.244 669.179 292.399C667.696 291.553 666.537 290.338 665.701 288.754C664.865 287.17 664.447 285.27 664.447 283.055C664.447 280.867 664.825 278.948 665.58 277.296C666.334 275.645 667.426 274.357 668.855 273.43C670.297 272.504 672.029 272.041 674.051 272.041C676.019 272.041 677.684 272.464 679.045 273.309C680.407 274.155 681.438 275.35 682.139 276.894C682.853 278.424 683.211 280.243 683.211 282.351V283.72H668.228ZM668.249 281.203H679.612C679.612 280.008 679.409 278.934 679.005 277.981C678.601 277.015 677.981 276.256 677.145 275.706C676.323 275.142 675.285 274.86 674.031 274.86C672.724 274.86 671.639 275.175 670.776 275.806C669.927 276.424 669.286 277.223 668.855 278.203C668.437 279.169 668.235 280.169 668.249 281.203Z'
          fill='#919EAB'
        />
        <path
          d='M698.296 275.162H693.585V288.11C693.585 288.848 693.659 289.392 693.807 289.741C693.969 290.076 694.232 290.291 694.595 290.385C694.973 290.479 695.485 290.526 696.132 290.526H698.417V293.023C698.161 293.117 697.77 293.197 697.244 293.264C696.732 293.332 696.092 293.365 695.323 293.365C693.881 293.365 692.762 293.17 691.967 292.781C691.172 292.392 690.612 291.815 690.289 291.049C689.979 290.284 689.824 289.345 689.824 288.23V275.162H686.427V272.444H689.925L690.835 266.383H693.585V272.423H698.296V275.162Z'
          fill='#919EAB'
        />
        <path
          d='M714.052 275.162H709.341V288.11C709.341 288.848 709.415 289.392 709.564 289.741C709.725 290.076 709.988 290.291 710.352 290.385C710.729 290.479 711.242 290.526 711.889 290.526H714.173V293.023C713.917 293.117 713.526 293.197 713.001 293.264C712.489 293.332 711.848 293.365 711.08 293.365C709.638 293.365 708.519 293.17 707.724 292.781C706.928 292.392 706.369 291.815 706.045 291.049C705.735 290.284 705.58 289.345 705.58 288.23V275.162H702.184V272.444H705.681L706.591 266.383H709.341V272.423H714.052V275.162Z'
          fill='#919EAB'
        />
        <path
          d='M721.54 283.72C721.54 285.035 721.756 286.23 722.187 287.304C722.632 288.365 723.299 289.21 724.189 289.841C725.092 290.472 726.217 290.788 727.565 290.788C728.9 290.788 730.046 290.479 731.003 289.861C731.973 289.244 732.593 288.351 732.863 287.183H736.401C736.145 288.593 735.579 289.781 734.703 290.747C733.827 291.714 732.768 292.446 731.528 292.942C730.288 293.426 728.994 293.667 727.646 293.667C725.692 293.667 723.973 293.244 722.49 292.399C721.008 291.553 719.849 290.338 719.013 288.754C718.177 287.17 717.759 285.27 717.759 283.055C717.759 280.867 718.137 278.948 718.891 277.296C719.646 275.645 720.738 274.357 722.167 273.43C723.609 272.504 725.341 272.041 727.363 272.041C729.331 272.041 730.996 272.464 732.357 273.309C733.719 274.155 734.75 275.35 735.451 276.894C736.165 278.424 736.522 280.243 736.522 282.351V283.72H721.54ZM721.56 281.203H732.923C732.923 280.008 732.721 278.934 732.317 277.981C731.912 277.015 731.292 276.256 730.457 275.706C729.634 275.142 728.597 274.86 727.343 274.86C726.036 274.86 724.95 275.175 724.088 275.806C723.239 276.424 722.598 277.223 722.167 278.203C721.749 279.169 721.547 280.169 721.56 281.203Z'
          fill='#919EAB'
        />
        <path
          d='M741.657 293.264V272.444H745.216V276.451C745.566 275.457 746.058 274.638 746.692 273.994C747.325 273.336 748.046 272.846 748.855 272.524C749.677 272.202 750.527 272.041 751.403 272.041C751.713 272.041 752.016 272.061 752.313 272.101C752.609 272.142 752.838 272.209 753 272.303V275.907C752.798 275.813 752.535 275.753 752.211 275.726C751.901 275.686 751.639 275.665 751.423 275.665C750.587 275.612 749.805 275.665 749.077 275.826C748.35 275.974 747.709 276.236 747.157 276.612C746.604 276.988 746.166 277.484 745.842 278.102C745.532 278.706 745.377 279.444 745.377 280.317V293.264H741.657Z'
          fill='#919EAB'
        />
        <path
          d='M399 131.416V96.7023C399 95.6352 399.267 94.8349 399.8 94.3013C400.401 93.7011 401.234 93.2342 402.301 92.9008C404.235 92.3005 406.57 91.867 409.304 91.6002C412.105 91.3335 414.806 91.2001 417.407 91.2001C425.877 91.2001 432.046 93.0008 435.915 96.6022C439.849 100.137 441.817 104.939 441.817 111.008C441.817 115.143 440.917 118.744 439.116 121.812C437.382 124.88 434.714 127.248 431.113 128.915C427.511 130.582 422.909 131.416 417.307 131.416H399ZM403.402 153.625C401.934 153.625 400.834 153.325 400.1 152.724C399.367 152.124 399 151.19 399 149.923V127.514H407.203V152.924C406.803 153.058 406.27 153.191 405.603 153.325C404.936 153.525 404.202 153.625 403.402 153.625ZM407.103 124.613H416.807C422.142 124.613 426.277 123.513 429.212 121.312C432.146 119.044 433.614 115.643 433.614 111.108C433.614 106.573 432.18 103.272 429.312 101.204C426.511 99.0699 422.476 98.0028 417.207 98.0028C415.406 98.0028 413.606 98.1028 411.805 98.3029C410.071 98.4363 408.504 98.6364 407.103 98.9031V124.613Z'
          fill='black'
        />
        <path
          d='M495.323 130.015C495.323 134.951 494.39 139.252 492.522 142.921C490.655 146.589 488.02 149.423 484.619 151.424C481.218 153.425 477.216 154.425 472.614 154.425C468.012 154.425 463.978 153.425 460.509 151.424C457.108 149.423 454.474 146.589 452.606 142.921C450.739 139.252 449.805 134.951 449.805 130.015C449.805 125.013 450.739 120.712 452.606 117.11C454.54 113.442 457.208 110.608 460.61 108.607C464.078 106.606 468.079 105.606 472.614 105.606C477.149 105.606 481.118 106.606 484.519 108.607C487.92 110.608 490.555 113.442 492.422 117.11C494.356 120.712 495.323 125.013 495.323 130.015ZM472.614 112.208C468.146 112.208 464.578 113.809 461.91 117.01C459.309 120.145 458.008 124.48 458.008 130.015C458.008 135.618 459.276 139.986 461.81 143.121C464.411 146.255 468.012 147.822 472.614 147.822C477.149 147.822 480.684 146.255 483.218 143.121C485.819 139.919 487.12 135.551 487.12 130.015C487.12 124.48 485.819 120.145 483.218 117.01C480.684 113.809 477.149 112.208 472.614 112.208Z'
          fill='black'
        />
        <path
          d='M508.202 126.714H516.205V152.924C515.871 153.058 515.371 153.191 514.704 153.325C514.037 153.525 513.304 153.625 512.503 153.625C511.103 153.625 510.036 153.358 509.302 152.824C508.569 152.224 508.202 151.291 508.202 150.023V126.714ZM516.205 130.616H508.202V114.009C508.535 113.876 509.035 113.742 509.702 113.609C510.436 113.409 511.203 113.309 512.003 113.309C513.404 113.309 514.438 113.609 515.105 114.209C515.838 114.743 516.205 115.676 516.205 117.01V130.616Z'
          fill='black'
        />
        <path
          d='M571.848 122.613V132.817H563.845V123.013C563.845 119.278 562.778 116.543 560.644 114.809C558.576 113.075 555.775 112.208 552.24 112.208C549.573 112.208 547.205 112.542 545.137 113.209C543.07 113.876 541.303 114.643 539.835 115.51V132.817H531.832V115.91C531.832 114.509 532.099 113.376 532.633 112.509C533.233 111.575 534.233 110.674 535.634 109.807C537.368 108.807 539.669 107.873 542.536 107.006C545.404 106.073 548.639 105.606 552.24 105.606C558.309 105.606 563.078 107.006 566.546 109.807C570.081 112.542 571.848 116.81 571.848 122.613ZM531.832 127.314H539.835V152.924C539.502 153.058 539.002 153.191 538.335 153.325C537.668 153.525 536.934 153.625 536.134 153.625C534.733 153.625 533.666 153.358 532.933 152.824C532.199 152.224 531.832 151.291 531.832 150.023V127.314ZM563.845 127.314H571.848V152.924C571.515 153.058 570.981 153.191 570.247 153.325C569.581 153.525 568.88 153.625 568.147 153.625C566.679 153.625 565.579 153.358 564.845 152.824C564.178 152.224 563.845 151.291 563.845 150.023V127.314Z'
          fill='black'
        />
        <path
          d='M586.934 126.714H594.938V140.52C594.938 143.187 595.705 145.088 597.239 146.222C598.772 147.289 600.873 147.822 603.541 147.822C604.675 147.822 605.942 147.622 607.343 147.222C608.743 146.822 609.91 146.355 610.844 145.822C611.244 146.222 611.611 146.722 611.944 147.322C612.278 147.923 612.445 148.623 612.445 149.423C612.445 150.89 611.578 152.091 609.844 153.025C608.11 153.958 605.709 154.425 602.641 154.425C597.972 154.425 594.171 153.391 591.236 151.324C588.368 149.256 586.934 145.822 586.934 141.02V126.714ZM591.036 114.509V107.907H611.344C611.544 108.173 611.744 108.607 611.944 109.207C612.144 109.807 612.245 110.441 612.245 111.108C612.245 112.175 611.978 113.009 611.444 113.609C610.911 114.209 610.177 114.509 609.243 114.509H591.036ZM594.938 129.715H586.934V93.501C587.268 93.3676 587.768 93.2342 588.435 93.1008C589.169 92.9008 589.936 92.8007 590.736 92.8007C592.137 92.8007 593.17 93.1008 593.837 93.7011C594.571 94.2346 594.938 95.135 594.938 96.4021V129.715Z'
          fill='black'
        />
        <path
          d='M657.353 140.82C657.353 145.088 655.786 148.423 652.651 150.824C649.517 153.225 644.981 154.425 639.046 154.425C633.977 154.425 629.842 153.658 626.641 152.124C623.44 150.524 621.839 148.79 621.839 146.922C621.839 146.122 622.039 145.355 622.439 144.621C622.906 143.821 623.573 143.187 624.44 142.72C626.241 143.988 628.341 145.155 630.742 146.222C633.143 147.289 635.878 147.822 638.946 147.822C645.882 147.822 649.35 145.488 649.35 140.82C649.35 138.886 648.75 137.318 647.549 136.118C646.415 134.851 644.715 133.95 642.447 133.417L634.144 131.216C630.076 130.216 627.108 128.682 625.24 126.614C623.373 124.48 622.439 121.846 622.439 118.711C622.439 115.176 623.873 112.108 626.741 109.507C629.609 106.906 633.977 105.606 639.846 105.606C642.981 105.606 645.715 105.939 648.049 106.606C650.384 107.206 652.184 108.04 653.451 109.107C654.785 110.108 655.452 111.208 655.452 112.408C655.452 113.275 655.219 114.042 654.752 114.709C654.352 115.376 653.785 115.877 653.051 116.21C652.251 115.676 651.217 115.11 649.95 114.509C648.75 113.842 647.316 113.309 645.648 112.909C643.981 112.442 642.147 112.208 640.146 112.208C637.212 112.208 634.844 112.775 633.043 113.909C631.243 115.043 630.342 116.643 630.342 118.711C630.342 120.178 630.842 121.479 631.843 122.613C632.91 123.68 634.577 124.48 636.845 125.013L643.748 126.714C648.283 127.781 651.684 129.482 653.952 131.816C656.219 134.084 657.353 137.085 657.353 140.82Z'
          fill='black'
        />
        <path
          d='M732.929 142.921L730.028 146.322C727.76 148.79 724.992 150.79 721.725 152.324C718.457 153.858 714.522 154.625 709.92 154.625C705.318 154.625 701.283 153.792 697.815 152.124C694.414 150.457 691.746 148.123 689.812 145.121C687.944 142.054 687.011 138.485 687.011 134.417C687.011 131.016 687.678 128.048 689.012 125.514C690.412 122.913 692.28 120.745 694.614 119.011C696.948 117.277 699.549 116.043 702.417 115.31L705.918 121.212C704.118 121.612 702.384 122.379 700.716 123.513C699.116 124.58 697.782 126.047 696.715 127.915C695.648 129.715 695.114 131.916 695.114 134.517C695.114 138.519 696.415 141.753 699.016 144.221C701.683 146.622 705.351 147.822 710.02 147.822C712.554 147.822 715.155 147.289 717.823 146.222C720.557 145.155 723.058 143.321 725.326 140.72L727.527 137.518C728.727 135.318 729.661 132.55 730.328 129.215C731.062 125.88 731.428 122.079 731.428 117.811C732.029 117.544 732.629 117.344 733.229 117.21C733.896 117.01 734.53 116.91 735.13 116.91C736.464 116.91 737.464 117.31 738.131 118.111C738.798 118.844 739.131 119.945 739.131 121.412C739.131 125.147 738.565 128.982 737.431 132.917C736.364 136.851 734.863 140.186 732.929 142.921ZM738.531 154.525C737.197 154.525 735.863 153.758 734.53 152.224L703.917 120.212L701.416 117.41C699.349 115.276 697.815 113.209 696.815 111.208C695.814 109.141 695.314 106.94 695.314 104.605C695.314 101.871 695.914 99.5034 697.115 97.5026C698.382 95.4351 700.183 93.8345 702.517 92.7007C704.918 91.5669 707.819 91 711.22 91C714.755 91 717.423 91.5002 719.224 92.5006C721.091 93.501 722.025 94.7682 722.025 96.3021C722.025 97.1024 721.791 97.836 721.324 98.503C720.924 99.1032 720.457 99.5701 719.924 99.9035C718.857 99.3033 717.59 98.8031 716.122 98.4029C714.722 98.0028 713.255 97.8027 711.721 97.8027C709.186 97.8027 707.185 98.4363 705.718 99.7034C704.251 100.904 703.517 102.571 703.517 104.705C703.517 106.773 704.051 108.607 705.118 110.208C706.185 111.808 707.719 113.642 709.72 115.71L742.933 150.223C742.733 151.557 742.266 152.591 741.532 153.325C740.799 154.125 739.798 154.525 738.531 154.525Z'
          fill='black'
        />
        <path
          d='M407.103 200.343H418.608C423.543 200.343 427.411 199.276 430.212 197.142C433.013 195.008 434.414 191.84 434.414 187.638C434.414 183.503 432.947 180.369 430.012 178.234C427.078 176.1 422.876 175.033 417.407 175.033C415.607 175.033 413.773 175.133 411.905 175.333C410.104 175.467 408.504 175.667 407.103 175.934V200.343ZM418.608 207.146H399V173.733C399 172.666 399.267 171.865 399.8 171.332C400.401 170.732 401.234 170.265 402.301 169.931C404.235 169.331 406.603 168.897 409.404 168.631C412.272 168.364 415.04 168.231 417.707 168.231C426.044 168.231 432.28 169.931 436.415 173.333C440.55 176.734 442.617 181.502 442.617 187.638C442.617 191.573 441.717 195.008 439.916 197.942C438.115 200.877 435.448 203.144 431.913 204.745C428.378 206.346 423.943 207.146 418.608 207.146ZM418.808 204.545L424.81 201.544C426.678 203.878 428.612 206.312 430.613 208.847C432.613 211.381 434.547 213.849 436.415 216.25C438.282 218.65 439.95 220.818 441.417 222.752C442.884 224.62 444.018 226.087 444.818 227.154C444.551 228.288 443.951 229.188 443.017 229.855C442.15 230.522 441.25 230.855 440.316 230.855C439.183 230.855 438.249 230.589 437.515 230.055C436.782 229.455 436.015 228.621 435.214 227.554L418.808 204.545ZM399 204.945H407.203V229.955C406.803 230.088 406.27 230.222 405.603 230.355C404.936 230.555 404.202 230.655 403.402 230.655C401.934 230.655 400.834 230.355 400.1 229.755C399.367 229.155 399 228.221 399 226.954V204.945Z'
          fill='black'
        />
        <path
          d='M458.434 212.148L458.034 205.845L488.245 201.744C487.979 198.076 486.712 195.074 484.444 192.74C482.176 190.339 479.042 189.139 475.04 189.139C470.905 189.139 467.471 190.639 464.736 193.641C462.068 196.575 460.735 200.81 460.735 206.346V208.546C461.201 213.882 462.935 217.95 465.937 220.751C469.005 223.486 473.173 224.853 478.442 224.853C481.243 224.853 483.777 224.386 486.045 223.452C488.312 222.519 490.113 221.518 491.447 220.451C492.18 220.918 492.747 221.485 493.147 222.152C493.614 222.752 493.848 223.452 493.848 224.253C493.848 225.52 493.114 226.72 491.647 227.854C490.246 228.921 488.345 229.788 485.945 230.455C483.61 231.122 480.976 231.456 478.041 231.456C472.906 231.456 468.438 230.522 464.636 228.654C460.901 226.787 458 224.019 455.933 220.351C453.932 216.616 452.931 212.081 452.931 206.746C452.931 202.944 453.465 199.576 454.532 196.642C455.666 193.641 457.2 191.106 459.134 189.039C461.135 186.971 463.502 185.404 466.237 184.337C468.971 183.203 471.939 182.636 475.14 182.636C479.209 182.636 482.777 183.503 485.845 185.237C488.979 186.971 491.413 189.406 493.147 192.54C494.948 195.608 495.848 199.143 495.848 203.144C495.848 204.612 495.515 205.679 494.848 206.346C494.181 206.946 493.247 207.313 492.047 207.446L458.434 212.148Z'
          fill='black'
        />
        <path
          d='M535.738 195.741C534.538 199.943 533.237 204.145 531.837 208.346C530.503 212.548 529.203 216.483 527.935 220.151C526.668 223.819 525.501 226.987 524.434 229.655C523.9 229.988 523.3 230.255 522.633 230.455C521.966 230.655 521.066 230.755 519.932 230.755C518.865 230.755 517.865 230.555 516.931 230.155C516.064 229.822 515.464 229.255 515.13 228.454C514.463 227.121 513.696 225.186 512.829 222.652C512.029 220.118 511.162 217.217 510.228 213.949C509.361 210.681 508.461 207.313 507.527 203.845C506.594 200.31 505.727 196.909 504.926 193.641C504.193 190.373 503.559 187.471 503.026 184.937C503.492 184.47 504.059 184.037 504.726 183.637C505.46 183.236 506.327 183.036 507.327 183.036C508.594 183.036 509.528 183.403 510.128 184.137C510.795 184.804 511.262 185.904 511.529 187.438C512.129 190.239 512.796 193.407 513.53 196.942C514.33 200.477 515.13 203.978 515.931 207.446C516.798 210.914 517.565 214.049 518.232 216.85C518.965 219.584 519.499 221.618 519.832 222.952H520.232C520.766 221.352 521.6 218.751 522.733 215.149C523.867 211.481 525.201 207.313 526.735 202.644C528.336 197.976 529.936 193.24 531.537 188.439C532.07 188.105 532.704 187.872 533.438 187.738C534.171 187.538 534.971 187.438 535.838 187.438C537.039 187.438 538.039 187.672 538.84 188.138C539.64 188.539 540.174 189.172 540.44 190.039C542.041 194.641 543.542 199.176 544.942 203.645C546.343 208.046 547.576 211.981 548.644 215.449C549.711 218.851 550.478 221.385 550.944 223.052H551.445C552.979 217.117 554.646 210.747 556.447 203.945C558.247 197.142 559.715 190.473 560.848 183.937C561.782 183.337 562.916 183.036 564.25 183.036C565.384 183.036 566.284 183.303 566.951 183.837C567.618 184.37 567.951 185.204 567.951 186.338C567.951 187.071 567.718 188.472 567.251 190.539C566.851 192.607 566.284 195.041 565.55 197.842C564.817 200.643 563.983 203.645 563.049 206.846C562.182 209.98 561.282 213.048 560.348 216.049C559.415 218.984 558.514 221.652 557.647 224.053C556.847 226.454 556.147 228.321 555.546 229.655C555.213 229.922 554.646 230.155 553.846 230.355C553.112 230.622 552.245 230.755 551.245 230.755C548.51 230.755 546.91 230.122 546.443 228.855C545.509 226.454 544.442 223.486 543.241 219.951C542.041 216.35 540.807 212.481 539.54 208.346C538.273 204.145 537.006 199.943 535.738 195.741Z'
          fill='black'
        />
        <path
          d='M595.037 231.556C588.768 231.556 583.899 230.322 580.431 227.854C577.03 225.386 575.329 221.818 575.329 217.15C575.329 212.815 576.763 209.514 579.631 207.246C582.565 204.912 586.6 203.511 591.736 203.044L605.941 201.644V198.843C605.941 195.508 604.941 193.074 602.94 191.54C600.939 190.006 598.238 189.239 594.837 189.239C592.102 189.239 589.468 189.639 586.934 190.439C584.466 191.24 582.265 192.14 580.331 193.14C579.798 192.674 579.297 192.14 578.831 191.54C578.43 190.873 578.23 190.206 578.23 189.539C578.23 187.805 579.197 186.471 581.131 185.537C582.932 184.604 585 183.903 587.334 183.437C589.735 182.903 592.269 182.636 594.937 182.636C600.739 182.636 605.341 183.937 608.742 186.538C612.144 189.139 613.844 193.24 613.844 198.843V222.552C613.844 224.019 613.544 225.153 612.944 225.953C612.41 226.687 611.577 227.387 610.443 228.054C608.842 228.921 606.708 229.722 604.04 230.455C601.373 231.189 598.372 231.556 595.037 231.556ZM595.037 224.953C597.838 224.953 600.139 224.686 601.94 224.153C603.807 223.552 605.141 222.986 605.941 222.452V207.946L593.536 209.247C590.068 209.514 587.501 210.281 585.833 211.548C584.166 212.815 583.332 214.649 583.332 217.05C583.332 219.517 584.299 221.452 586.233 222.852C588.234 224.253 591.169 224.953 595.037 224.953Z'
          fill='black'
        />
        <path
          d='M636.456 192.54V208.346H628.452V193.14C628.452 191.606 628.719 190.406 629.253 189.539C629.853 188.605 630.82 187.705 632.154 186.838C633.888 185.704 636.256 184.737 639.257 183.937C642.258 183.07 645.593 182.636 649.261 182.636C654.596 182.636 657.264 183.97 657.264 186.638C657.264 187.305 657.164 187.938 656.964 188.539C656.764 189.072 656.497 189.539 656.163 189.939C655.497 189.806 654.629 189.672 653.562 189.539C652.495 189.406 651.428 189.339 650.361 189.339C647.293 189.339 644.592 189.672 642.258 190.339C639.924 190.94 637.99 191.673 636.456 192.54ZM628.452 203.745L636.456 204.945V229.955C636.122 230.088 635.622 230.222 634.955 230.355C634.288 230.555 633.554 230.655 632.754 230.655C631.354 230.655 630.287 230.388 629.553 229.855C628.819 229.255 628.452 228.321 628.452 227.054V203.745Z'
          fill='black'
        />
        <path
          d='M697.187 222.252V188.639L705.19 188.539V222.552C705.19 223.819 704.89 224.853 704.29 225.653C703.756 226.387 702.889 227.121 701.688 227.854C700.355 228.721 698.454 229.521 695.986 230.255C693.519 231.055 690.684 231.456 687.483 231.456C682.681 231.456 678.446 230.622 674.778 228.955C671.11 227.287 668.242 224.686 666.174 221.151C664.107 217.55 663.073 212.915 663.073 207.246C663.073 201.444 664.074 196.742 666.074 193.14C668.142 189.539 670.91 186.905 674.378 185.237C677.846 183.503 681.647 182.636 685.782 182.636C688.383 182.636 690.851 183.003 693.185 183.737C695.519 184.47 697.353 185.371 698.687 186.438V193.841C697.42 192.574 695.753 191.506 693.685 190.639C691.685 189.706 689.317 189.239 686.582 189.239C683.848 189.239 681.314 189.839 678.979 191.04C676.645 192.173 674.778 194.074 673.377 196.742C671.977 199.41 671.276 202.978 671.276 207.446C671.276 213.515 672.744 217.95 675.678 220.751C678.613 223.486 682.514 224.853 687.383 224.853C689.717 224.853 691.618 224.62 693.085 224.153C694.619 223.619 695.986 222.986 697.187 222.252ZM705.19 190.539L697.187 190.639V165.329C697.52 165.196 698.02 165.063 698.687 164.929C699.421 164.729 700.155 164.629 700.888 164.629C702.355 164.629 703.422 164.929 704.089 165.529C704.823 166.063 705.19 166.963 705.19 168.231V190.539Z'
          fill='black'
        />
        <path
          d='M752.996 217.85C752.996 222.119 751.429 225.453 748.294 227.854C745.16 230.255 740.625 231.456 734.689 231.456C729.62 231.456 725.485 230.689 722.284 229.155C719.083 227.554 717.482 225.82 717.482 223.953C717.482 223.152 717.682 222.385 718.082 221.652C718.549 220.851 719.216 220.218 720.083 219.751C721.884 221.018 723.985 222.185 726.386 223.252C728.787 224.319 731.521 224.853 734.589 224.853C741.525 224.853 744.993 222.519 744.993 217.85C744.993 215.916 744.393 214.349 743.192 213.148C742.059 211.881 740.358 210.981 738.09 210.447L729.787 208.246C725.719 207.246 722.751 205.712 720.884 203.645C719.016 201.51 718.082 198.876 718.082 195.741C718.082 192.207 719.516 189.139 722.384 186.538C725.252 183.937 729.62 182.636 735.489 182.636C738.624 182.636 741.358 182.97 743.693 183.637C746.027 184.237 747.828 185.071 749.095 186.138C750.429 187.138 751.096 188.238 751.096 189.439C751.096 190.306 750.862 191.073 750.395 191.74C749.995 192.407 749.428 192.907 748.695 193.24C747.894 192.707 746.861 192.14 745.593 191.54C744.393 190.873 742.959 190.339 741.292 189.939C739.624 189.472 737.79 189.239 735.789 189.239C732.855 189.239 730.487 189.806 728.687 190.94C726.886 192.073 725.986 193.674 725.986 195.741C725.986 197.209 726.486 198.509 727.486 199.643C728.553 200.71 730.221 201.51 732.488 202.044L739.391 203.745C743.926 204.812 747.327 206.512 749.595 208.847C751.862 211.114 752.996 214.115 752.996 217.85Z'
          fill='black'
        />
        <path
          d='M512.375 91.241L514.649 95.7756C514.687 95.8503 514.759 95.9019 514.843 95.9138L519.928 96.641C520.139 96.6711 520.223 96.926 520.07 97.0723L516.391 100.602C516.33 100.66 516.302 100.744 516.317 100.826L517.185 105.81C517.221 106.016 517.001 106.174 516.813 106.076L512.264 103.723C512.189 103.684 512.1 103.684 512.025 103.723L507.477 106.076C507.289 106.173 507.068 106.016 507.104 105.81L507.973 100.826C507.987 100.743 507.96 100.66 507.899 100.602L504.22 97.0723C504.067 96.926 504.151 96.6714 504.362 96.641L509.447 95.9138C509.531 95.9019 509.603 95.8501 509.64 95.7756L511.914 91.241C512.009 91.0531 512.281 91.0531 512.375 91.241Z'
          fill='#2196F3'
        />
        <path
          d='M274.73 136.397L263.912 134.854L259.047 125.077C257.387 121.704 254.639 121.704 252.979 125.077L248.114 134.854L237.296 136.397C233.575 136.912 232.717 139.542 235.407 142.172L243.249 149.776L241.417 160.524C240.787 164.241 242.963 165.842 246.34 164.069L256.013 158.981L265.686 164.069C269.006 165.842 271.239 164.241 270.609 160.524L268.777 149.776L276.619 142.172C279.309 139.542 278.508 136.969 274.73 136.397Z'
          fill='#66D4FF'
        />
        <path
          d='M343.504 104.78H311.102V95C311.102 91.6863 308.415 89 305.102 89H206.91C203.646 89 200.956 91.6872 200.956 94.9461V104.78H168.553C165.519 104.78 163 107.238 163 110.326V139.999C163 156.98 176.797 170.758 193.8 170.758H204.906C209.257 180.649 216.699 189.74 224.828 196.315L227.233 198.259C234.56 204.205 238.797 213.124 238.797 222.501V231.591C238.797 233.592 240.457 235.25 242.461 235.25H269.482C271.486 235.25 273.146 233.592 273.146 231.591V220.671C273.146 212.381 276.867 204.548 283.336 199.345L287.172 196.258C295.301 189.683 302.743 180.592 307.094 170.701H318.2C335.203 170.701 349 156.922 349 139.942V110.326C349 107.296 346.538 104.78 343.447 104.78H343.504ZM193.8 156.408C184.697 156.408 177.312 149.032 177.312 139.942V119.016H200.956V153.149C200.956 154.235 201.127 155.321 201.242 156.408H193.8ZM274.863 173.446C241.774 191.284 208.398 157.894 226.202 124.848C228.721 120.217 232.614 116.329 237.251 113.813C270.341 96.0324 303.717 129.365 285.912 162.411C283.393 167.042 279.5 170.93 274.863 173.446ZM334.745 139.942C334.745 149.032 327.36 156.408 318.258 156.408H310.815C310.93 155.321 311.102 154.235 311.102 153.149V119.073H334.745V139.999V139.942ZM304.69 283.848H301.827V265.438C301.827 256.633 294.671 249.544 285.912 249.544H226.145C217.329 249.544 210.23 256.69 210.23 265.438V283.848H207.367C202.616 283.848 198.78 287.679 198.78 292.424C198.78 297.169 202.616 301 207.367 301H304.69C309.441 301 313.277 297.169 313.277 292.424C313.277 287.679 309.441 283.848 304.69 283.848ZM281.447 272.413C281.447 275.558 278.871 278.131 275.722 278.131H236.278C233.129 278.131 230.553 275.558 230.553 272.413C230.553 269.269 233.129 266.696 236.278 266.696H275.722C278.871 266.696 281.447 269.269 281.447 272.413Z'
          fill='#2196F3'
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to='/'>{logo}</RouterLink>;
}